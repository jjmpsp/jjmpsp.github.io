---
layout: defaults/page
permalink: sitemap.html
title: Sitemap for joel-murphy.co.uk
narrow: false
title: Website sitemap for joel-murphy.co.uk
crumbtitle: Website sitemap
description: Website sitemap for joel-murphy.co.uk.
ogDescription: Website sitemap for joel-murphy.co.uk. 

---

{% include nav-breadcrumbs.html %}

## Website Sitemap
I want to make it as easy as possible to explore the content on this website. If you're looking for something in particular then you can use the [search functionality of my website](/search), or you can use this sitemap page to search for content by page name.

{% for page in site.pages %}
{% if page.exclude != true %}
[{{ page.title }}]({{site.baseurl}}{{ page.url }})
{% endif %}
{% endfor %}

---

## Sitemap.xml
Looking for an xml sitemap? There's a sitemap.xml located here.


{% include toc-scroll-to-top.html excludeHierarchy=true %}