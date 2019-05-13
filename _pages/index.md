---
layout: defaults/page
permalink: index.html
narrow: true
title: A note from the Author...
---

Welcome to the personal website of Joel Murphy. Here is a message from the author:

> You've probably stumbled across this website because I've directed you here to learn from my [tutorials](/list/tutorials.html), or maybe you've been stalking my social media profiles and you've ended up clicking through to here? (hey, it's okay - we're all human and get curious sometimes! 😂)
>
> I've created this website as a central repository of information to document topics, events, and developments I find interesting in my personal & work life. You'll find that the majority of the content posted here is about technology, this is because it's the industry I work in and one of my favourite hobbies outside of work too. I also post about [my travels](/travel/), [product reviews](list/product-reviews.html), and [money saving tips ](/list/money-saving.html) - so maybe you non tech enthusiast visitors may be interested in these.  
>
> If you're here to learn about technology related topics, you may be interested in some of [my Tutorials](/list/tutorials.html), [my Talks & Presentations](/list/talks-presentations.html), and [my Blog Posts](/list/posts.html). I try to update these as often as possible whenever I have free time (which isn't very often sadly). I'll be using emoji's throughout the website because they add a nice personal touch to the content I write and make things a little more interesting. 👌
>
> All of the content published to this website will be available in English. If the content I produce gains some popularity, I'd be more than happy to give permission for it to be translated into another language. However, please notify me of any planned publications you hope to make ahead of time, as it would be appreciated to get some credit in the form of a link back to the original source.
>
> That's all for now. I hope you have a fantastic day (or night), depending on which part of the world you are from. If you have any questions or concerns, please feel free to reach out to me by clicking on the contact button located in the side bar of this website. 
>
> Cheers!
>
>-- Joel

<div class="card mb-3">
    <img class="card-img-top" src="static/img/night_out.jpg"/>
    <div class="card-body bg-light">
        <div class="card-text"><strong>Featured photo:</strong> Me enjoying a night out at <a href="https://clwb.net/" target="_blank">Clwb Ifor Bach</a> in Cardiff.</div>
    </div>
</div>

{% comment %}
Recent Posts
{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}
{% endcomment %}


