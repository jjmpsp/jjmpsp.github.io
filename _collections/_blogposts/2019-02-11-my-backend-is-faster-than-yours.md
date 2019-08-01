---
title: My backend is faster than yours...
tags:
  - backend
  - server
---

*Warning:* Dirty minded people have probably read this title wrong 🍑

As a full stack developer, something I've been thinking about for a long time is that there are just so many combinations of tech stacks this day in age.
Evaluating different frameworks for a website's front-end is pretty easy. My trail of thought usually goes something like the following:

- Ease of development and don't care about speed? jQuery
- Speed but lack of ease of development and a lot of re-inventing the wheel? Vanilla JavaScript
- Cutting edge, component driven? React
- etc..

But evaluating a backend has become somewhat more difficult.



A project that intends to solve this divergance is GraphQL. No, not like the database technology, but instead a paradigm for querying an API for data.

> We use PHP because we started as a startup and this was the fastest way to prototype our ideas back when we started.

> We use Node.js because it allows our full-stack developers to have less context-switching when working on different areas of our systems. Whether it's frontend or backend, there's no major syntax changes. Every single member of our team is experienced with a variety of languages, but reducing the cognitive overhead that comes with switching languages lets us more smoothly switch between front-end and back-end development.
  It was a pretty hot new technology when we adopted it at the company's inception in 2011, and we're glad it's progressed and matured so much since then... and of course, still has more maturing to go, but we'll keep adopting new versions and features and fixes as they come!

https://stackshare.io/karlbecker/decisions/102255183769595112


So which backend to use?

Disclaimer:
I have been a PHP fan for years. Some HATE the language but for me it's always worked well and served it purpose well.
If you're one of those people who hate PHP, then I recommend you to check out PHP7 and it's new features. Combine that with some understanding of basic security and data sanitisation, and you've now got a half decent language which can scale to hundreds of thousands of users with some small configuration changes. This is why I think it's pretty neat.

As a developer who has created a PHP framework in the past and worked with several different technologies, these are the things you should be looking out for in a framework:

1. CLI support - does the framework support running commands from the CLI as well as a webserver

2. API support - can you create an API

3. CSRF support - do you need to implement a custom CSRF (Cross Site Request Forgery) mechanism within the framework? Or is there a built in form builder which makes building CSRF 

4. Service driven. 
Does the framework support 

5. Is there an admin dashboard
Some frameworks even

6. ORM system
Does the framework support an ORM (Object Relational Mapper) system 'out of the box'? ORM's can significantly improve the ease of development if used correctly and can simplify 

7. Middleware support
If 

8. Hooks support
Similar to the point I made above about middleware, having the option to hook into data events can simplify how you think o the data flow within your application.

9. Cache service
Caching is one of those things that developers often overlook. Unless you're writing your backend in pure machine code (which I hope not for the sake of your sanity!!) then chances are your application is already running on some 

10. Helper methods
Does the framework include helper methods

11. Authentication support

12. Plugin support
As a developer, you shouldn't need to be constantly writing software. In fact, you should be rewriting other people's code to  
  
Do you even need a backend?
Sometimes we have to think if a backend is even required for the content we want to publish to the web. In fact, this is the exact situation I hit back last year when I decided to ditch wordpress in favour of Jekyll. Personally, the speed increase was my main reason for wanting to switch to using static pages, but another main benefit is that I now no longer need to support yet another server and save money from doing so.




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