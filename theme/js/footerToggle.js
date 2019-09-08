let footerDocked = null;
let tocActive = null;

window.setCookie = function (key, value) {
    var d = new Date();
    var expiresInDays = 30 * 24 * 60 * 60 * 1000;
    d.setTime(d.getTime() + expiresInDays);
    var expires = "expires=" + d.toGMTString();
    document.cookie = key + '=' + value + "; " + expires + ";path=/";
    return value;
};

window.getCookie = function (key) {
    var name = key + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

function showTOC() {
    $("#float-toc").show();
    setCookie("TOC_ACTIVE", true);
    tocActive = true;
}

function hideTOC() {
    $("#float-toc").hide();
    setCookie("TOC_ACTIVE", false);
    tocActive = false;
}

function dockStickyFooter() {
    $("#footer").show().css("position", "fixed");
    setCookie("FOOTER_DOCKED", true);
    footerDocked = true;
}

function undockStickyFooter() {
    $("#footer").show().css("position", "relative");
    setCookie("FOOTER_DOCKED", false);
    footerDocked = false;
}

$(document).ready(function () {
    // Get docked settings from cookies
    const _footerDocked = getCookie("FOOTER_DOCKED");
    const _tocActive = getCookie("TOC_ACTIVE");

    if (_footerDocked === 'true') {
        footerDocked = true;
        $("#toggleStickyFooter").text("⬇");
        dockStickyFooter();
    } else {
        footerDocked = false;
        $("#toggleStickyFooter").text("⬆");
        undockStickyFooter();
    }

    if (_tocActive === 'true') {
        tocActive = true;
        $("#toggleTableOfContents").text("⬇");
        showTOC();
    } else {
        tocActive = false;
        $("#toggleTableOfContents").text("⬆");
        hideTOC();
    }

    $("#toggleStickyFooter").click(function () {
        console.log('stickyfooter='+footerDocked);
        if (footerDocked) {
            undockStickyFooter();
            $(this).text("⬆");
        } else {
            dockStickyFooter();
            $(this).text("⬇");
        }
    });

    $("#toggleTableOfContents").click(function () {
        console.log('tocactive='+tocActive);
        if (tocActive) {
            hideTOC();
            $(this).text("⬆");
        } else {
            showTOC();
            $(this).text("⬇");
        }
    });
});