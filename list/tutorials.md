---
title: Joel's Tutorials
narrow: false
permalink: /tutorials
show_profile: true
---

I am a huge fan of continuous learning and love learning new skills. I spend a lot of my income on new learning materials but I want to share my knowledge with you here for free.  

{% for tutorial in site.tutorials %}
- [{{ tutorial.title }}]({{ site.baseurl }}{{ tutorial.url }})
{% endfor %}

<div class="email-subscription-cta">
    <h2>Stay in the loop</h2>
    <h4>Want to be notified of recent tutorials, blog posts, money saving tips, and other news?</h4>
    <p>Subscribe today - it's free of charge and you can opt out at any time if it's not for you.</p> 
    <form action="{{site.mailchimp-list}}" method="post" name="mc-embedded-subscribe-form" class="wj-contact-form validate" target="_blank" novalidate>
        <div class="mc-field-group">
            <input type="email" placeholder="email@domain.com" name="EMAIL" class="required email" id="mce-EMAIL" autocomplete="on">
            <input type="submit" value="Subscribe" name="subscribe" class="heart">
        </div>
    </form>
</div>

<style>
    .email-subscription-cta {
        background: #efefef;
        padding: 20px;
    }
    .wj-contact-form input {
        vertical-align: middle;
        margin-top: 0.25em;
        margin-bottom: 0.5em;
        padding: 0.75em;
        font-family: monospace, sans-serif;
        border:1px solid #444;
        outline-color: #2e83e6;
        border-radius: 3px;
        transition: box-shadow .2s ease;
    }
    
    .wj-contact-form input[type="submit"] {
        background-color: #2e83e6;
        border: 1px solid #2e83e6;;
        color: #eee;
    }
</style> 