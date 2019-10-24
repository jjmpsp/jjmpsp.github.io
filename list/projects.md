---
title: Joel's Personal Projects
narrow: false
permalink: /projects/
show_profile: true
description:  Personal technology projects of Joel Murphy.
ogDescription: Personal technology projects of Joel Murphy. 
---

I try to work on projects to practise working with different technologies or just for fun. Below are some examples of the projects I've worked on since 2005 to recently.

{% for project in site.projects %}
- [{{ project.title }}]({{ site.baseurl }}{{ project.url }})
{% endfor %}

{% include toc-scroll-to-top.html excludeHierarchy=true %}