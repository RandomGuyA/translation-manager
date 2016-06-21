/*---------------- CONTENT ARRANGEMENT PLUGIN -----------------*/

;(function($, doc, win){
    "use strict";

    /*---------------------- GLOBAL VARIABLES ------------------------*/
    var name = 'name';
    //var $self;
    var classSuffix = "trans-";
    var classID = 10000;
    var idList = [];

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

        var tags = ["p", "a", "span", "li", "ul", "strong", "title", "img", "h1", "h2", "h3", "h4", "h5", "h6", "label", "input"];


        $('head').append('<link rel="stylesheet" href="../../vendors/bootstrap/dist/css/bootstrap.min.css" type="text/css" />');
        $('head').append('<link rel="stylesheet" href="../../css/style.css" type="text/css" />');
        $('body').addClass('container');

        $(".main-content").wrapAll($('<form>').addClass('form-inline plugin-form'));

        $(".main-content").find('*').each(function(){
            //console.log(this.nodeName);

            for(var a=0; a<tags.length; a++){

                var $tag = $(this);
                var tag = this;


                if(this.nodeName.toLowerCase()==tags[a]){

                    var text = $.trim($tag.text());
                    var contentCount = $.trim($tag.text()).length;

                    if(contentCount>0) {

                        var className = classSuffix + classID;
                        var tagName = this.nodeName;

                        $tag.append(
                            $('<div>').addClass('form-group col-sm-12 remove').append(
                                $('<label>').addClass('remove').text(tagName+": "),
                                $('<label>').addClass('remove').attr('id', className+"label").text(tagName+": "),
                                $('<textarea>').text($.trim($tag.text())).addClass('remove').attr({
                                    type: 'text',
                                    rows:'4',
                                    cols:'50',
                                    name: className,
                                    id: className,
                                    tag: tagName,
                                    for: className
                                }))
                            );

                        $('#' + className).insertAfter($tag);
                        $('#' + className+"label").insertBefore($tag);
                        $tag.addClass(className);
                        console.log($tag[0]);
                        idList.push(className);
                        classID++;
                    }
                }
            }
        });
        $(".main-content").append($('<button>').addClass('btn primary btn-lg').text("save").attr({type:'submit', value:'submit', id:'plugin-submit'}));
        $(".main-content").prepend('</form>');


        bindFunctions();

    };

    /*---------------------- BINDING FUNCTIONS ------------------------*/
    function bindFunctions(){
        $('#plugin-submit').click(function(e){
            e.preventDefault();

            $(idList).each(function(){
                console.log( $("#"+this).val());
            });

        });
    }



    /*---------------------- PRIVATE FUNCTIONS ------------------------*/

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