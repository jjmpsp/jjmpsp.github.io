---
title: How to export Visual Studio Code Plugins list
tags:
  - visual
  - studio
  - code
  - visual studio code
  - export
  - plugins
---

You may have a situation where you need to export your config to another machine, or you may want to share your visual studio code plugins list with another developer.
Luckily, there is a nice way of doing this through the command line.

Machine A:

In VSCode Powershell terminal :

code --list-extensions > extensions.list

Machine B:

Copy extension.list to the machine B

In VSCode Powershell terminal :

cat extensions.list |% { code --install-extension $_}


Many thanks to @milanio on StackOverflow for this great solution.
https://stackoverflow.com/a/49936683/1007680



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