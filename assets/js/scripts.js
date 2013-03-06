$(document).ready(function() {
        if (document.documentElement.clientWidth <= 400) {
             $('[data-hover="dropdown"]').on('click', function( e ) {
                 var parent = $(this).parent();
                 $(this).next().slideToggle(200);
             });
        }
});
