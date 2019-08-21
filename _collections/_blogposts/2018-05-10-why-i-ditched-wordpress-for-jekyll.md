---
title: Why I ditched wordpress for Jekyll
tags:
  - jekyll
  - wordpress
  - migration
  - cms
description: 
ogDescription: 
---

If you've been thinking of moving away from Wordpress and using a static website generator site then this is probably the post for you... In this post I will discuss my reasons for migrating my old Wordpress website to Jekyll.

<!--more-->

Wordpress is so stupidly bloated.
I used to be a wordpress developer myself, but sometimes I asked myself 'why'.

Wordpress and it's huge plugin system can be a handle to maintain. Don't get me wrong, it's amazing that there are so many plugins actively developed for Wordpress but w

Sometimes websites can have in excess of 10, 20, 50, to 100+ plugins installed. All it takes is for one of those plugins to have one single security vulnrebility and this is enough to comepletely take down your website. Some wordpress security vulnerabilities can go unseen for months, or even years. What if a plugin developer decides to abandon their masterpiece of a plugin if they've taken on other projects? You're pretty much screwed and the only option you're left with is to fork and maintain a version of the plugin yourself, or use an alternative plugin. The issues with this is it can take up a lot of time

<!--more-->

Now my website is completely managed with git. This is absolutely fantastic. In a matter of minutes and from pretty much any device I can make changes to my website and github pages will automatically deploy those changes for me when pushed to a specificied branch. How cool this this?

Just like any other page on the internet, HTML is used to write the structure and content of webpages. However, Jekyll has support for rendering content using Markdwon. This is a nice little extra as it allows you to do things such as writing lists much faster than before. E.g. why write 20 lines of HTML when you can achieve the same thing in 4?

* Point 1
* Point 2
* Point 3

<ul>
    <li>
        Point 1
    </li>
    <li>
        Point 2
    </li>
    <li>
        Point 3
    </li>
</ul>

What's even cooler about markdown is that it can be combined with HTML in Jekyll so you have the best of both worlds for typing up webpage markup and content.

You can customise a lot more than you think, just by using pre-html renderers and configuration defined in a YAML file.

Static websites are a lot faster 

There's no need for maintaining a database
This point kind of goes hand-in-hand as being a positive and a negative when developing websites. Managing a database has become pretty easy nowadays thanks to the numerous amount of backup scripts and dozens of storage providers available to us. But why even bother managing a database unless you have to? By having a static website you can focus 
