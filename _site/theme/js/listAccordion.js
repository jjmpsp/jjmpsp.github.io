$(document).ready(function(){
    $('.toggle').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.children("span").text("▼")
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.children("span").text("▲")
            $this.next().slideToggle(350);
        }

        // Load images contained in accordion
        $('.lazy-img').lazy({
            effect: "fadeIn",
            effectTime: 300,
            threshold: 0
        });
    });
});