$(document).ready(function(){
    $(".jumpToTop").click(function(e){

        e.preventDefault();

        $('html, body').animate(
            {
                scrollTop: $($("body")).offset().top,
            },
            500,
            'linear'
        );

        return false;
    });
});