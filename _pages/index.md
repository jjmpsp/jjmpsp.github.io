---
layout: defaults/page
permalink: index.html
narrow: false
title: Welcome to joel-murphy.co.uk
ogDescription: Homepage for Joel Murphy
---

{% include nav-breadcrumbs.html %}
          
<div class="card mb-3">
    <img class="card-img-top lazy-img" data-src="static/img/joel-cloud-native-wales.jpg" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" title="Joel at Cloud Native Wales meetup in Cardiff" alt="Joel at Cloud Native Wales meetup in Cardiff" />
</div>

Welcome to the personal website of Joel Murphy. Here is a message from the author:

> You've probably stumbled across this website because I've directed you here to learn from my [tutorials](/tutorials), or to explore my [travel experiences](/travel.html). Otherwise, there's a chance you've been stalking my social media profiles and ended up clicking through to here? (hey, it's okay - we're all human and get curious sometimes! <span class="normal-text">😂</span>) Anyhow, a warm welcome to you, regardless of how you ended up here! <span class="normal-text">😄</span>
>
> I've created this website as a central repository of information to document topics, events, and developments I find interesting in my personal & work life. You'll find that the majority of the content posted here is about technology; this is because it's the industry I work in and one of my favourite hobbies outside of work. I also post about [my travels](/travel/), conduct [product reviews](list/product-reviews.html), and share [money saving tips ](money-saving), which you non tech savvy visitors may be interested in reading about <span class="normal-text">📖</span>. 
>
> You may have already noticed that I've used an absurd amount of emoji's throughout this website. There's no real reason why I've done this but I believe they add a nice personal touch to the content I write. Let's be honest, who doesn't love emojis unless you're a caveman without any sense of humour? <span class="normal-text">👌 🥰 💯</span>
>
> If you're here to learn about technology related topics, you may be interested in [my Tutorials](/tutorials), [my Talks & Presentations](/list/talks-presentations.md), and [my Blog Posts](/blog). I try to update these when I have free time (which isn't very often sadly) <span class="normal-text">😔</span>.
>
> All of the content published to this website will be available in English. If the content I produce gains some popularity, I'd be more than happy to give permission for it to be translated into other languages. However, please notify me of any planned publications you hope to make ahead of time, as it would be appreciated to get accredited in the form of a link back to the original source <span class="normal-text">🔗</span>.
>
> That's all for now. I hope you have a fantastic day <span class="normal-text">🌞</span> or night <span class="normal-text">🌝</span> - depending on which part of the world you're from. <span class="normal-text">🌎</span> If you have any questions or concerns about the content on this website, or just want to chat, please feel free to reach out to me by clicking on the contact button located in the side bar of this website. 
>
> Cheers! <span class="normal-text">🍻🍻🍻</span>
>
>-- Joel

------

## Recent Blog Posts
{% for post in site.blogposts limit:3 %}
{% include components/post-card.html %}
{% endfor %}

{% include toc-scroll-to-top.html excludeHierarchy=true %}
