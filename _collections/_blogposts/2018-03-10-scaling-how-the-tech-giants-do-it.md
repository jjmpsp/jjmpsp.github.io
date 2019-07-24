---
title: Scaling: how do tech giants scale to millions / billions of users?
tags:
  - jekyll
  - liquid
---

Has the thought of scaling ever crossed your mind?

Keeping a service online is a 24 hour operation. If you work in I.T then theres a chance that 
you've seen first hand just how much people take technology for granted.

Big companies and organisations such as Google, Microsoft, Amazon, Twitter, Facebook, etc.
all hare one common problem: How to scale

The foundations of the internet.

Keep in mind that the internet is just a massive network of connected computers.

The internet's Domain Name System (DNS) is just like a gigantic.

'call john'

'visit joel-murphy.co.uk'

Another foundation of the internet is the HTTP. This deals with how requests are sent across the internet.

the DNS server has the simple task of fetching that particular resources. If you're curious how your 

So with those foundations, how do 

Container technologies.

Th

The thing is about 



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