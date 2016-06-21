/*---------------- CONTENT ARRANGEMENT PLUGIN -----------------*/

;(function($, doc, win){
    "use strict";

    /*---------------------- GLOBAL VARIABLES ------------------------*/
    var name = 'name';
    //var $self;
    var classSuffix = "trans-";
    var classID = 10000;


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

        var tags = ["p", "a", "span", "li", "ul", "title", "img", "h1", "h2", "h3", "h4", "h5", "h6", "label", "input"];
        //var tags = ["p"];

        $(".main-content").find('*').each(function(){
            //console.log(this.nodeName);

            for(var a=0; a<tags.length; a++){

                if(this.nodeName.toLowerCase()==tags[a]){

                    //console.log(this.nodeName);



                    $(this).addClass(classSuffix+classID);
                    console.log($(this)[0]);


                    console.log();
                    classID++;
                }
            }
        });





    };

    /*---------------------- BINDING FUNCTIONS ------------------------*/

    /*---------------------- PRIVATE FUNCTIONS ------------------------*/


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