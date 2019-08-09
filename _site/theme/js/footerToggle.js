$(document).ready(function () {
    $("#toggleStickyFooter").clickToggle(
        function () {
            $(this).text("⬆");
            $("#footer").css("position", "relative");
        },
        function () {
            $(this).text("⬇");
            $("#footer").css("position", "fixed");
        }
    );

    $("#toggleTableOfContents").clickToggle(
        function () {
            $(this).text("⬆");
            $("#float-toc").hide();
        },
        function () {
            $(this).text("⬇");
            $("#float-toc").show();
        }
    );
});