---
layout: defaults/travel
title: Joel's travels
permalink: travel
narrow: false
---

<!--
<script type="text/javascript" src="/static/js/PlacesBeen.js"></script>
-->

Travelling is one of my favourite hobbies outside of work, and my goal is to visit as much of the world as possible. As you can imagine, this doesn't always come cheap as money is  but I always try to find the most viable way to explore new places
I have decided to document my experience in every single country visited with the aim of assisting other keen travellers around the world to do exactly the same.

<div id="vmap" style="width: 100%; height: 600px;"></div>


## Africa
<div class="row">
    {% for place in site.travel_africa %}
        <div class="col-sm-6">
            <a href="{{ page.baseurl }}{{ place.url }}">
                <div class="box">
                    <div class="imgBox">
                        <img class="img-responsive lazy-img" data-src="{{ page.baseurl }}/static/img/countries/{{ place.featuredImage }}" />
                    </div>
                    <div class="content">
                        <h2>{{ place.title }}</h2>
                        <p>Africa</p>
                    </div>
                </div>
            </a>
        </div>
    {% endfor %}    
</div>

## Europe
<div class="row">
    {% for place in site.travel_europe %}
        <div class="col-sm-6">
            <a href="{{ page.baseurl }}{{ place.url }}">
                <div class="box">
                    <div class="imgBox">
                        <img class="img-responsive lazy-img" data-src="{{ page.baseurl }}/static/img/countries/{{ place.featuredImage }}" />
                    </div>
                    <div class="content">
                        <h2>{{ place.title }}</h2>
                        <p>Europe</p>
                    </div>
                </div>
            </a>
        </div>
    {% endfor %}    
</div>

{% include toc-scroll-to-top.html excludeHierarchy=true %}

<style>
.container .box {
    position:relative;
    background:#000;
    float:left;
    margin:15px;
    box-sizing:border-box;
    overflow:hidden;
    box-shadow:0 2px 4px rgba(0,0,0,.8);
}
.container .box:before {
    content:'';
    position:absolute;
    top:10px;
    left:10px;
    right:10px;
    bottom:10px;
    border-top:1px solid #fff;
    border-bottom:1px solid #fff;
    box-sizing:border-box;
    transition:0.5s;
    transform: scaleX(0);
    opacity:0;
}
.container .box:hover:before {
    transform:scaleX(1);
    opacity:1;
}
.container .box:after {
    content:'';
    position:absolute;
    top:10px;
    left:10px;
    right:10px;
    bottom:10px;
    border-left:1px solid #fff;
    border-right:1px solid #fff;
    box-sizing:border-box;
    transition:0.5s;
    transform: scaleY(0);
    opacity:0;
}
.container .box:hover:after {
    transform:scaleY(1);
    opacity:1;
}
.container .box .imgBox {
    position:relative;
}
.container .box .imgBox img {
    width:100%;
    transition:0.5s;
}
.container .box:hover .imgBox img {
    opacity:.2;
    transform:scale(1.2);
}
.container .box .content {
    position:absolute;
    width:100%;
    top:50%;
    transform:translateY(-50%);
    z-index:2;
    padding:20px;
    box-sizing:border-box;
    text-align:center;
}
.container .box .content h2 {
    margin: 0 0 10px;
    padding:0;
    color:#fff;
    transition:0.5s;
    transform:translateY(-50px);
    opacity:0;
    visibility:hidden;
}
.container .box .content p {
    margin:0;
    padding:0;
    color:#fff;
    transform:translateY(50px);
    opacity:0;
    visibility:hidden;
}
.container .box:hover .content h2,
.container .box:hover .content P {
    opacity:1;
    visibility:visible;
    transform:translateY(0px);
}
</style>