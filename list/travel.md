---
layout: defaults/travel
title: Joel's travels
permalink: travel
narrow: false
---

<!--
<script type="text/javascript" src="/static/js/PlacesBeen.js"></script>
-->
<script type="text/javascript" src="/static/js/jquery.lazy.min.js"></script>

<script>
$(document).ready(function(){
    $('.lazy-img').lazy({
        effect: "fadeIn",
        effectTime: 300,
        threshold: 0
    });
});
</script>

Travelling is one of my favourite hobbies outside of work, and my goal is to visit as much of the world as possible. As you can imagine, this doesn't always come cheap as money is  but I always try to find the most viable way to explore new places
I have decided to document my experience in every single country visited with the aim of assisting other keen travellers around the world to do exactly the same.


<div id="vmap" style="width: 100%; height: 600px;"></div>

## Africa
{% for place in site.travel_africa %}
- [{{ place.title }}]({{ page.baseurl }}{{ place.url }})
{% endfor %}

## Europe
{% for place in site.travel_europe %}
- [{{ place.title }}]({{ page.baseurl }}{{ place.url }})
{% endfor %}

{% for place in site.travel_europe %}
    <img class="card-img-top lazy-img" data-src="{{ page.baseurl }}/static/img/countries/{{ place.featuredImage }}" />
{% endfor %}

{% include toc-scroll-to-top.html excludeHierarchy=true %}