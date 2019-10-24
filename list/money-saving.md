---
title: Money Saving Guides
narrow: false
permalink: /money-saving/
show_profile: true
description: Money saving tips, money saving guides, and money saving glitches from a money saving enthusiast.
ogDescription: Money saving tips, money saving guides, and money saving glitches from a money saving enthusiast.
---

Money saving is an art of itself and is a decent hobby for some.

Some things you have to keep in mind are:
- Is the saving really worth it?

To most, spending time hunting for deals just simply isn't worth it. If you're working hourly then why not just spend an additional hour doing work and earning money, instead of wasting an hour to save £1?! 

- Is the saving against your / others morals?
Do you really want to be seen in the local supermarket waiting for a cashier to come along and scan each item individually? If you're from the UK then you'll see that this happens a lot - and trust me, people do judge you for it.
Another point to make here is greed often takes over. If a cheese and onion pasty is reduced to 10p and expires the next day, do you really need to buy 12 of them? That's just pure waste and ruins the saving for every body else.

If you've found a saving then you may be tempted to share it with others. Good on you but my advice would be to keep the saving for yourself before sharing it with others. 
I'm speaking from experience here actually. How annoying is it when you've found a really good deal with someone else, shared it before you've even managed to buy the deal or received the physical item in the mail, 
Someone else could already be logged on to the site you shared and may have the option to be able to 'check out with a single click'. If you're a new customer to that particular e-commerce store then you've just missed an opportunity.

I often see this happen with online product listing glitches. If you're lucky enough to find a listing for substantially cheaper than it's supposed to be then you should just go ahead and buy it (potentially with next day or same day delivery if there is an option for this - depending on the value of the item and the saving available of course). By doing this you've got the best chance of receiving a delivery you ordered at the glitched price - Win! Then feel free to share with others to your heart's content. If it doesn't work for the other people you shared the deal with then no big loss really.





{% if site.money_savings %}
    {% for money_saving in site.money_savings %}
- [{{ money_saving.title }}]({{ site.baseurl }}{{ money_saving.url }})
    {% endfor %}
{% else %}
Unfortunately, I haven't found the time to post any money saving guides just yet. Please check back soon!
{% endif %}