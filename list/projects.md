---
title: Joel's Personal Projects
narrow: true
permalink: projects
show_profile: true
---

I try to work on projects to practise working with different technologies or just for fun. Below are some examples of the projects I've worked on since 2005 to recently.

{% for project in site.projects %}
- [{{ project.title }}]({{ site.baseurl }}{{ project.url }})
{% endfor %}
