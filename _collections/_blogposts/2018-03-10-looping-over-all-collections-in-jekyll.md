---
title: How to loop over all collection types in Jekyll
tags:
  - jekyll
  - liquid
---

Here's how to put a single image into a post, using a Bootstrap 4 card. This shows how to mingle Markdown with HTML, too.

<!--more-->

The card allows a caption to be aligned with the photo, and the card classes contain a `card-img-top` that ensures the image is responsive within the grid.

<div class="card mb-3">
    <img class="card-img-top" src="/static/img/jekyll-logo.png" />
    <div class="card-body bg-light">
        <div class="card-text">
            Jekyll, a static site generator.
        </div>
    </div>
</div>

The HTML source for this card is below, or of course you could look at the raw source for this file in the GitHub repo or on your disk after you have downloaded the repo. WHen looking at the source, you can see the Markdown mingled with the HTML.

{% highlight markdown %}
{ % for collection in site.collections % }
                       
 { % assign name = collection.label % }
 <section>
   <h1>{ { name } }</h1>
 </section>

{ % endfor % }
{% endhighlight %}

{% highlight html %}
{% for collection in site.collections %}
  {% assign name = collection.label %}
  <section>
    <h1>{{ name }}</h1>   
  </section>
{% endfor %}
{% endhighlight %}