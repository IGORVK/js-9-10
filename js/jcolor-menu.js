
jQuery(document).ready(function(){

 
jQuery("ul.sub-menu").hover( function () {
alert('зашел');
    jQuery(this).animate({
        

        backgroundColor:"#EB8523",

    }, 100 );

}, (function() {
      alert('вышел');

    jQuery(this).animate({

        backgroundColor:"#E14B4B",

    }, 100 );



});
