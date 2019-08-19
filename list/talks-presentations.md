---
title: Talks & Presentations
narrow: false
permalink: list/talks-presentations.html
show_profile: true
description:  Talks and Presentations by Joel Murphy.
ogDescription: Talks and Presentations by Joel Murphy. 
---

I am a keen believer in the 'spirit of sharing' and by nature I like to help others. I've put this page together to list some of the talks and presentations I've done:

{% if site.talks_presentations %}
    {% for talks_presentation in site.talks_presentations %}
    - [{{ talks_presentation.title }}]({{ site.baseurl }}{{ talks_presentation.url }})
    {% endfor %}
{% else %}
Unfortunately, I haven't found the time to post any of my talks and presentations just yet. Please check back soon!
{% endif %}

{% include toc-scroll-to-top.html excludeHierarchy=true %}