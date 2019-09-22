---
title: Why Facebook has smashed Open Source and other tech companies should be following suit
tags:
  - facebook
  - open source
  - oss
description: 
ogDescription: 
---

During my usual R&D web browsing at work, I discovered the following video on Youtube which documents the creation of GraphQL. 

https://www.youtube.com/watch?v=783ccP__No8

This got me thinking that I should create a huge list of tools that have been open sourced by big technology companies, so this is exactly what I did

Read the blog post: Software Tools big tech companies have released as Open Source


https://opensource.facebook.com/


<!--more-->

The card allows a caption to be aligned with the photo, and the card classes contain a `card-img-top` that ensures the image is responsive within the grid.

<div class="card mb-3">
    <img class="card-img-top" src="/static/img/jekyll-logo.png" />
    <div class="card-body bg-light">
        <div class="card-text">
            The Peak District on a mosty morning. Image credit, Official <a href="https://jekyllrb.com/">Jekyll website</a>.
        </div>
    </div>
</div>

The HTML source for this card is below, or of course you could look at the raw source for this file in the GitHub repo or on your disk after you have downloaded the repo. WHen looking at the source, you can see the Markdown mingled with the HTML.

{% highlight html %}

{% for collection in site.collections %}

  {% assign name = collection.label %}

  <section>
    <h1>{{ name }}</h1>
   
  </section>

{% endfor %}
{% endhighlight %}