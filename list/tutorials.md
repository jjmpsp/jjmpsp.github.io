---
title: Joel's Tutorials
narrow: false
permalink: /tutorials
show_profile: true
pagination:
    collection: tutorials
    enabled: true
---

Joel is a huge fan of continuous learning, personal development, and learning new skills. Joel spends a great amount of time and money resources on new learning materials. He shares this knowledge on his personal website as he believes everyone should be able to receive a free education in topics schools don't teach.  

{% for tutorial in site.tutorials %}
- [{{ tutorial.title }}]({{ site.baseurl }}{{ tutorial.url }})
{% endfor %}

<div style="margin:20px 0;">
    {% include pagination.html %}
</div>

<div class="email-subscription-cta">
    <h2>Stay in the loop</h2>
    <h4>Want to be notified of recent tutorials, blog posts, money saving tips, and other news?</h4>
    <p>Subscribe today - it's free of charge and you can opt out at any time if it's not for you.</p> 
    <form action="{{site.mailchimp-list}}" method="post" name="mc-embedded-subscribe-form" class="wj-contact-form validate" target="_blank" novalidate>
        <div class="mc-field-group" style="display:flex; justify-content: space-between;">
            <input type="email" placeholder="email@domain.com" name="EMAIL" class="required email" id="mce-EMAIL" autocomplete="on" style="flex-basis: 73%;">
            <input type="submit" value="Subscribe" name="subscribe" style="flex-basis: 25%;">
        </div>
    </form>
</div>

{% include toc-scroll-to-top.html excludeHierarchy=true %}