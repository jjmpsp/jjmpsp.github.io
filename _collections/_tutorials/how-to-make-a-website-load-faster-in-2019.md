---
title: How to make a website load faster in 2019 using modern optimisation techniques 
---

So you've just finished writing your first website, but for some reason your website is loading incredibly slow. At first you're probably used to dealing with waiting for your slow loading website, but this is wasted time and you should really do something about it. This guide will give you some pointers on how to (or why you should) solve your slow loading website issues.

<!--more-->

## The problem
To highlight the main benefits, optimising your website can:

* Save you money on website hosting bills.
* Save your visitors bandwidth and potentially money
* Save you (and your visitors time) 

So we're now in 2019 and website development has become easier than ever, web hosting has become cheaper and more widely available, storage has become cheaper, and high memory environments are a lot more common than they were a few years back.

Consider where your application is hosted.
* Are you using shared hosting? There could be hundreds of other websites on the same server as your web application is hosted, so why not put it onto its own instance so you can have a greater amount of resources dedicated to just your website.

Ensure your application uses a caching layer. As mentioned above, high memory environments have become a lot more common than before. RAM is a lot faster than hard drive storage, so consider storing frequently used data in RAM, rather than on disk. 

Do you need jQuery?
*Hypocrit mode* I'm a sucker for this one but it's actually a really important thing to point out that jquery itself is a very helpful JavaScript library, but most websites out there doesn't even require half or more of the functionality jQuery offers. Vanilla JavaScript is enough. Someone has kindly created a website which explains all of this stuff in a dumbed down fashion, so please check out http://youmightnotneedjquery.com/ to learn more about if you really need to be using jQuery on your website.


Consider using a CDN
Do you know where your website visitors come from? We're talking miliseconds or seconds here.

Consider how your web application is being accessed. 
Are your website visitors browsing your website using a Desktop or Mobile device? A massive 70% of web traffic happens on a mobile device (according to CIODive, 2018). One thing that hasn't changed in recent years is that mobile internet providers are very greedy with their profit margins. In the UK, data can be as expensive as £10 per GB for additional data allowance on a standard plan. This is damn right extortionate but unfortunately, there's not much we can do about it for now so it's down to developers to ensure resources are optimised correctly for mobile usage.

Does your website contain video elements? iOS has disabled autoplay for a few years now, but some other mobile vendors may have web browsers which play videos automatically. Having multiple videos on a page is enough to drain a client's data allowance in a matter of minutes and could potentially make your website slow if you run a medium to high traffic website.


