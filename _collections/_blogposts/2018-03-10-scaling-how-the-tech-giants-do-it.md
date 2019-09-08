---
title: How do tech giants scale to millions or billions of users?
tags:
  - jekyll
  - liquid
description: Ever wondered how websites can handle so much traffic without going down? This blog post explains how to scale internet services to a large amount of users. 
ogDescription: Ever wondered how websites can handle so much traffic without going down? This blog post explains how to scale internet services to a large amount of users. 
---

Has the thought of scaling ever crossed your mind? This post explains the foundations of scaling theory and the requirements for scaling internet web applications to a large scale. 

<!--more-->

Keeping a service online is a 24 hour operation. If you work an environment where you rely on I.T then there's a chance that 
you've seen first hand just how much people take technology for granted. If you work in I.T then you'll definitely be more than aware of this.

Big companies and organisations such as Google, Microsoft, Amazon, Twitter, Facebook, etc.
all share one common problem: How to scale to Millions, or even Billions of users across the globe. This blog post will discuss some of the most common methods for scaling websites.

To understand scaling we must understand the foundations of the internet and the technologies that power it. 

OSI layer model. Understanding all topics within the OSI layer takes a great amount of experience and expertise learning but there's no need to know everything about every implementation in the OSI layers, just how different layers communicate with each other, or more importantly, the data flow between different layers. 

Your source code 
Your web application runtime 
Your web server
Your Operating System (OS)
Your Virtual or Physical Machine
The underlying hardware that powers all of the above. 

There are generally two rules to following when designing services for scale. 

Making applications stateless
Avoiding single points of failure

Making an application stateless is crucial as a first step to make an application scale. Keep in mind that a 

An example of a single point of failure is only having one application server available. What if that application server crashes? Your service goes down and at this point you've hit a single point of failure. If you'd like to know more about single point of failures, I've written another blog post about its implications. 

Another concept is load balancing. Load balancing is the 


Keep in mind that the internet is just a massive network of connected computers.

The internet's Domain Name System (DNS) is just like a gigantic phone book system in its most simple form.

'call john'

'visit joel-murphy.co.uk'

Another foundation of the internet is the HTTP. This deals with how requests are sent across the internet.

the DNS server has the simple task of fetching that particular resources. If you're curious how your 

So with those foundations, how do 

Container technologies.

The thing is about 

You have to ensure your application is service driven and completely resilient to errors
This involves heavily testing your application and all associated 

How do I test my application to ensure its fault tolerant? 
Excellent question. There isn't a universal answer to this question as it depends on the setup of your service. 

If your load balancer dies, then every other service will be affected. 

Are there any other approaches that you feel are beneficial for scaling systems? If so, please feel free to let me know in the comments! 

Got any questions? Feel free to also drop a comment and I will try my best to explain further. 