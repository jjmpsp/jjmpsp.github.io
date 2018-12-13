---
title: Why I ditched wordpress for Jekyll
tags:
  - jekyll
  - wordpress
  - migration
  - cms
---

Here's how to put a single image into a post, using a Bootstrap 4 card. This shows how to mingle Markdown with HTML, too.

<!--more-->

The card allows a caption to be aligned with the photo, and the card classes contain a `card-img-top` that ensures the image is responsive within the grid.

<div class="card mb-3">
    <img class="card-img-top" src="/static/img/christmas_in_cardiff.jpg"/>
    <div class="card-body bg-light">
        <div class="card-text">
            The Peak District on a mosty morning.
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