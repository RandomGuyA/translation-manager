/*---------------- CONTENT ARRANGEMENT PLUGIN -----------------*/

;(function($, doc, win){
    "use strict";

    /*---------------------- GLOBAL VARIABLES ------------------------*/
    var name = 'name';
    //var $self;
    var classSuffix = "trans-";
    var classID = 10000;
    var idList = [];
    var welshTags = [];
    var template;

    /*---------------------- INITIALISATION ------------------------*/

    function App(el, opts){

        console.log("translation manager activated");

        this.$el = $(el);
        this.$el.data(name, this);

        this.defaults = {

            required:true

        };

        var meta = this.$el.data(name + '-opts');
        this.opts = $.extend(this.defaults,opts, meta);

        this.init();
    }

    App.prototype.init = function() {

        /*---------------------- VARIABLES ------------------------*/

        var $self = this.$el;
        //var title = setAndShow($self.find('title').html());

        var tags = ["p", "a", "span", "li", "ul", "td", "strong", "title", "img", "h1", "h2", "h3", "h4", "h5", "h6", "label", "input"];

        $('head').append('<link rel="stylesheet" href="../../vendors/bootstrap/dist/css/bootstrap.min.css" type="text/css" />');
        $('head').append('<link rel="stylesheet" href="../../css/style.css" type="text/css" />');
        $('head').append('<meta charset="utf-8">');
        $('body').addClass('container');

        $(".main-content").wrapAll($('<form>').addClass('form-inline plugin-form'));

        var previousText="";

        $(".main-content").find('*').each(function(){
            //console.log(this.nodeName);

            for(var a=0; a<tags.length; a++){

                var $tag = $(this);
                var tag = this;

                if(this.nodeName.toLowerCase()==tags[a]){

                    var text = $.trim($tag.text());
                    var contentCount = $.trim($tag.text()).length;

                    if(contentCount>0&&text != previousText) {

                        var className = classSuffix + classID;
                        var tagName = this.nodeName;

                        console.log(tagName+" - "+text.length+" - "+text);

                        $tag.append(
                            $('<textarea>').text($.trim($tag.text())).addClass('remove').attr({
                                type: 'text',
                                rows:'4',
                                cols:'50',
                                name: className,
                                id: className,
                                tag: tagName,
                                for: className
                            }))

                        $('#' + className).insertAfter($tag);
                        $tag.addClass(className);
                        //console.log($tag[0]);
                        idList.push(className);
                        classID++;
                        previousText = text;
                    }
                }
            }
        });

        $(".main-content").append($('<a>').attr('href','../index.php').append($('<button>').addClass('btn btn-lg').text("back").attr({type:'button', value:'back'})));
        $(".main-content").append($('<button>').addClass('btn primary btn-lg remove').text("save").attr({type:'submit', value:'submit', id:'plugin-submit'}));
        $(".main-content").prepend('</form>');

        bindFunctions();

    };


    /*---------------------- BINDING FUNCTIONS ------------------------*/

    function bindFunctions(){
        $('#plugin-submit').click(function(e){
            e.preventDefault();

            $(idList).each(function(){


                var $destElement = $("."+this);
                var $sourceElement = $("#"+this);


                console.log("element " +$destElement.prop("tagName"));
                console.log("\ttextLength " +$destElement.text().length);
                console.log("\tchild count "+$destElement.children().size());


                $destElement.children().each(function (){
                    console.log("\t\t"+this.nodeName +" - "+ this.nodeType);
                });

                //destElement.find('*').length();

                $("."+this).text($("#"+this).val())


            });

            removePlugin(idList);

            console.log(window.location.pathname );
            saveData($('html').html());

        });
    }


    /*---------------------- PRIVATE FUNCTIONS ------------------------*/


    function saveData(html){

        var data = {
            'action': 'save_file',
            'html': html,
            'path':window.location.pathname
        };
        ////console.log(data);
        var ajaxCall = $.ajax({

            url: '../../save.php',
            type: 'post',
            data: data,
            success: function(data, status) {
                console.log("Ajax call made");
            },

            error: function(xhr, desc, err) {
                console.log(xhr);
                console.log("Details: " + desc + "\nError:" + err);
            }
        });
    }
    function removePlugin(idList){
        $('.remove').remove();
        var cnt = $(".plugin-form").contents();
        $(".plugin-form").replaceWith(cnt);

        $(idList).each(function(){
           $("."+this).removeClass(this);

        });
    }


    function checkIfTagIsEmpty($node){

        var nodeContent = $.trim($node.text()).length;

        console.log(nodeContent);


        $node.children().each(function(){

            var $childNode = $(this);
            var childNodeContent = $.trim($childNode.text()).length;

            console.log($childNode);

            $childNode.children().each(function(){
                checkIfTagIsEmpty($(this));
            });
        });

    }

    function setAndShow(text){
        console.log(text);
        return text;
    }


    //-----------------------------------------
    //				INVOCATION
    //-----------------------------------------

    $.fn.translationmanager = function(opts) {
        return this.each(function() {
            new App(this, opts);
        });
    };

})(jQuery, document, window);