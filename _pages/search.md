---
layout: defaults/page
permalink: search.html
narrow: false
crumbtitle: Search for content
title: Search for content
description: Search for content on joel-murphy.co.uk.
ogDescription: Search for content on joel-murphy.co.uk.
---

{% include nav-breadcrumbs.html %}
          
## Search for content

Please use the search box below for searching for content on joel-murphy.co.uk.

<div id="search-searchbar"></div>

<div class="post-list" id="search-hits">
{% for post in site.posts %}
  <div class="post-item">
    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
    <span class="post-meta">{{ post.date | date: date_format }}</span>

    <h2>
      <a class="post-link" href="{{ post.url | relative_url }}">
        {{ post.title | escape }}
      </a>
    </h2>

    <div class="post-snippet">{{ post.excerpt }}</div>
  </div>
{% endfor %}
</div>

{% include algolia.html %}

  

{% include toc-scroll-to-top.html excludeHierarchy=true %}
