$(document).ready(function () {
    $("#toggleStickyFooter").clickToggle(
        function () {
            $(this).text("⬆");
            $("#footer").css("position", "relative");
            setCookie("FOOTER_DOCKED", true);

        },
        function () {
            $(this).text("⬇");
            $("#footer").css("position", "fixed");
            setCookie("FOOTER_DOCKED", true);
        }
    );

    $("#toggleTableOfContents").clickToggle(
        function () {
            $(this).text("⬆");
            $("#float-toc").hide();
            setCookie("TOC_ACTIVE", false);
        },
        function () {
            $(this).text("⬇");
            $("#float-toc").show();
            setCookie("TOC_ACTIVE", true);
        }
    );
});


window.setCookie = function(key, value) {
    var d = new Date();
    var expiresInDays = 30 * 24 * 60 * 60 * 1000;
    d.setTime( d.getTime() + expiresInDays );
    var expires = "expires=" + d.toGMTString();
    document.cookie = key + '=' + value + "; " + expires + ";path=/";
}