/*---------------- CONTENT ARRANGEMENT PLUGIN -----------------*/

;(function($, doc, win){
    "use strict";

    /*---------------------- GLOBAL VARIABLES ------------------------*/
    var name = 'name';
    //var $self;

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
        var title = setAndShow($self.find('title').html());



        $('*').each(function(){
           console.log(this.nodeName);
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