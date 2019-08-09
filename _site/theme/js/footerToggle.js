window.setCookie = function(key, value) {
    var d = new Date();
    var expiresInDays = 30 * 24 * 60 * 60 * 1000;
    d.setTime( d.getTime() + expiresInDays );
    var expires = "expires=" + d.toGMTString();
    document.cookie = key + '=' + value + "; " + expires + ";path=/";
};

function showTOC(){
    $("#float-toc").show();
    setCookie("TOC_ACTIVE", true);
}

function hideTOC(){
    $("#float-toc").hide();
    setCookie("TOC_ACTIVE", false);
}

function dockStickyFooter(){
    $("#footer").css("position", "relative");
    setCookie("FOOTER_DOCKED", true);
}

function undockStickyFooter(){
    $("#footer").css("position", "fixed");
    setCookie("FOOTER_DOCKED", true);
}

$(document).ready(function () {
    $("#toggleStickyFooter").clickToggle(
        function () {
            $(this).text("⬆");
            dockStickyFooter();
        },
        function () {
            $(this).text("⬇");
            undockStickyFooter();
        }
    );

    $("#toggleTableOfContents").clickToggle(
        function () {
            $(this).text("⬇");
            hideTOC();
        },
        function () {
            $(this).text("⬆");
            showTOC(this);
        }
    );
});


$(document).ready(function(){
    hideTOC()
    dockStickyFooter();
});