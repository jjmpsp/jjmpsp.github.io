---
title: How to loop over any collection type in Jekyll
tags:
  - jekyll
  - collections
  - liquid
description: Sample code demonstrating how to loop over any collection type in Jekyll
ogDescription: Sample code demonstrating how to loop over any collection type in Jekyll
---

Here's how to put a single image into a post, using a Bootstrap 4 card. This shows how to mingle Markdown with HTML, too.

s
<!--more-->

<div class="card mb-3">
    <img class="card-img-top" src="/static/img/jekyll-logo.png" />
    <div class="card-body bg-light">
        <div class="card-text">
            Jekyll, a static site generator.
        </div>
    </div>
</div>

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