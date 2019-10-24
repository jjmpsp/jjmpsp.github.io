<div class="email-subscription-cta">
    <h2>📧 Stay in the loop</h2>
    <h4>Want to be notified of recent tutorials, blog posts, money saving tips, and other news?</h4>
    <p>Subscribe today - it's free of charge and you can opt out at any time if it's not for you. No tie-ins, No charges, just quality content delivered straight to your inbox.</p> 
    <form id="subscribe-form" action="{{ site.mailchimp-list }}" method="post" name="mc-embedded-subscribe-form" class="wj-contact-form validate" target="_blank" novalidate>
        <div class="mc-field-group" style="display:flex; justify-content: space-between;">
            <input type="email" required aria-required pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" placeholder="email@domain.com" name="EMAIL" class="required email" id="mce-EMAIL" autocomplete="on" style="flex-basis: 73%;">
            <input type="submit" value="Subscribe" name="subscribe" style="flex-basis: 25%;">
        </div>
    </form>
    
    <div style="display:none; align-items:center; justify-content:center;" class="checkbox-container">
        <div class="circle-loader load-complete">
          <div class="checkmark draw"></div>
        </div>
    </div>
</div>

<script>
    $(document).ready(function(){
       
        $('#subscribe-form').submit(function(e) {
       
            $(this).attr("disabled");
            $(".checkbox-container").css("display","flex");
            $('.checkmark').toggle();
           
            return false;
        });
    });
</script>