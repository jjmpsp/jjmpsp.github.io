---
title: Money Saving Guides
narrow: false
permalink: list/money-saving.html
show_profile: true
---

{% if site.money_savings %}
    {% for money_saving in site.money_savings %}
- [{{ money_saving.title }}]({{ site.baseurl }}{{ money_saving.url }})
    {% endfor %}
{% else %}
Unfortunately, I haven't found the time to post any money saving guides just yet. Please check back soon!
{% endif %}