---
layout: defaults/page
permalink: index.html
narrow: true
---

{% include components/intro.md %}

[Learn more about Joel's skills.]({{ site.baseurl}}{% link _pages/about.md %})

### What else?

Joel keeps himself busy on open-source and hobby projects. This is great for learning new skills. [The full list is here]({{ site.baseurl }}{% link list/projects.md %}). There's also a project page about how to [install and use this theme]({{ site.baseurl }}{% link _projects/install.md %}).

Joel has worked in engineering for many years and has an impressive portfolio. [Browse it here.]({{ site.baseurl }}{% link list/portfolio.html %})

Joel has posted a bunch of tips about how to use Friday Theme. There's the three most-recent posts below, or here's [all posts by year.]({{ site.baseurl }}{% link list/posts.html %})

<div class="card mb-3">
    <img class="card-img-top" src="static/img/night_out.jpg"/>
    <div class="card-body bg-light">
        <div class="card-text">Me enjoying a night out in <a href="https://clwb.net/">Clwb Ifor Bach</a> in Cardiff.</div>
    </div>
</div>

{% comment %}
Recent Posts
{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}
{% endcomment %}


