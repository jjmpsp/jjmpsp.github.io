$(document).ready(function () {
    var expandViewToggled = false;
    $("#expand-view").click(function () {

        if (!expandViewToggled) {
            $("#side").attr('style', 'display:none !important');
            $("#content").addClass('col-xs-12 col-md-12 col-lg-12 col-xl-12');
            expandViewToggled = true;
        } else {
            $("#side").removeAttr('style');
            $("#content").removeClass('col-xs-12 col-md-12 col-lg-12 col-xl-12');
            expandViewToggled = false;
        }
    });

    var target = $('#float-toc');
    var scrollbar = $("#scroll-value");

    $(document).scroll(function (e) {
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
        //var opacityPercent = (scrollPercent / 100).toFixed(2);
        //target.css('opacity', opacityPercent);
        scrollbar.css("width", scrollPercent + "%");
    });
});