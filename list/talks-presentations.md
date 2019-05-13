---
title: Talks & Presentations
narrow: true
permalink: list/talks-presentations.html
show_profile: true
---

{% if site.talks_presentations | size > 0 %}
    {% for talks_presentation in site.talks_presentations %}
    - [{{ talks_presentation.title }}]({{ site.baseurl }}{{ talks_presentation.url }})
    {% endfor %}
{% else %}
Unfortunately, I haven't found the time to post any of my talks and presentations just yet. Please check back soon!
{% endif %}
