---
title: Talks & Presentations
narrow: true
permalink: list/talks-presentations.html
show_profile: true
---

{% for talks_presentation in site.talks_presentations %}
- [{{ talks_presentation.title }}]({{ site.baseurl }}{{ talks_presentation.url }})
{% endfor %}
