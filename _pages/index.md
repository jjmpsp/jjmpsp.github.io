---
layout: defaults/page
permalink: index.html
narrow: false
title: Welcome to joel-murphy.co.uk
---

{% include nav-breadcrumbs.html %}
          
<div class="card mb-3">
    <img class="card-img-top" src="static/img/joel-and-regan-night-out-in-cardiff.jpg" title="Joel and Regan night out in Cardiff" alt="Joel and Regan night out in Cardiff" />
</div>

Welcome to the personal website of Joel Murphy. Here is a message from the author:

> You've probably stumbled across this website because I've directed you here to learn from my [tutorials](/tutorials), or to explore my [travel experiences](/travel.html). Otherwise, there's a chance you've been stalking my social media profiles and ended up clicking through to here? (hey, it's okay - we're all human and get curious sometimes! 😂) Anyhow, a warm welcome to you, regardless of how you ended up here! 😄
>
> I've created this website as a central repository of information to document topics, events, and developments I find interesting in my personal & work life. You'll find that the majority of the content posted here is about technology, this is because it's the industry I work in and one of my favourite hobbies outside of work. I also post about [my travels](/travel/), conduct [product reviews](list/product-reviews.html), and share [money saving tips ](money-saving), which you non tech enthusiasts may be interested in having a look at. 
>
>I've used an array of emoji's throughout the website because they add a nice personal touch to the content I write. And let's be honest, who doesn't love emojis? 👌 🥰 💯
>
> If you're here to learn about technology related topics, you may be interested in some of [my Tutorials](/tutorials), [my Talks & Presentations](/list/talks-presentations.md), and [my Blog Posts](/posts). I try to update these as often as possible whenever I have free time (which isn't very often sadly).
>
> All of the content published to this website will be available in English. If the content I produce gains some popularity, I'd be more than happy to give permission for it to be translated into other languages. However, please notify me of any planned publications you hope to make ahead of time, as it would be appreciated to get some credit in the form of a link back to the original source.
>
> That's all for now. I hope you have a fantastic day 🌞 or night 🌝 - depending on which part of the world you are from of course. 🌎 If you have any questions or concerns about the content on this website, or just want to chat, please feel free to reach out to me by clicking on the contact button located in the side bar of this website. 
>
> Cheers!
>
>-- Joel

{% comment %}
Recent Posts
{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}
{% endcomment %}


<h2>Looking to hire a technology expert?</h2>
<p>I now offer my expertise as a service. These are just some of the deliverables I can provide:</p>
<div class="card-columns">    
    <div class="card">
        <h3>Web Design</h3>
        I have the experience to design websites which stand out above the rest. Aesthetics and usability is key for websites. We can take care of this for you.
    </div>
    
    <div class="card">
        <h3>Web Development</h3>
        I can plan, prototype, and develop custom scripts for your needs. If you have an idea then we build it so you can see it become a reality.
    </div>
    
    <div class="card">
        <h3>SEO</h3>
        We have the ability to bring your website to the top of peoples search results. Giving your business more visibility and reach to potential customers.
    </div>
    
    <div class="card">
        <h3>Hosting</h3>
        We provide fast and reliable hosting with a 99.9% uptime. We use cloud hosting with native SSDs on a high speed 40Gbps network.
    </div>
    
    <div class="card">
        <h3>E-commerce</h3>
        We can build online e-commerce shops to give your company the best opportunity to boost your sales online, and focus on building up your business.
    </div>
    
    <div class="card">
        <h3>Website Maintenance</h3>
        Need someone to look after your website to make sure it's up to date with your latest content and designs? We've got you covered.
    </div>
</div>

