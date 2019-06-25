---
title: How create Docker containers on Windows 
---

So you've just finished writing your first website, but for some reason your website is loading incredibly slow. At first you're probably used to dealing with waiting for your slow loading website, but this is wasted time and you should really do something about it. This guide will give you some pointers on how to (or why you should) solve your slow loading website issues.

<!--more-->

## The problem
Part of my work at the NHS is to develop Windows Docker Containers to recreate some of our infrastructure.
Yes, that's right, Windows Containers. 

The problem with Windows containers right now is it's just not ready for production environments, especially in the public sector.
Startup companies and organisations who trust Open Source Software won't have an issue with finding hundreds of previous examples for supporting their infrastructure, but with Windows it's a difficult game as there aren't quite as many automation and configuration management tools available.
Reading online you'll see literally thousands of tutorials for Unix, but Windows just seems to have 


Microsoft is doing a lot of work 

But then again, even some of the most recent reviews on Docker Hub seem to be negative. Why? Because it appears the


The following URL can be used to determine information on the latest pre-built Docker images for Docker Container development.
https://mcrflowprodcentralus.cdn.mscr.io/mcrprod/windows/servercore?P1=1561466799&P2=1&P3=1&P4=3r9IasAa3yNlIj01t3shEtQ3psc5W%2F65fEGQNXgMUU4%3D&se=2019-06-25T12%3A46%3A39Z&sig=dUSdYO3JYoZwtiVE36FE0O8MHUE8LJEgwXbtaYzMFv4%3D&sp=r&sr=b&sv=2015-02-21

Here's a simple example of how to load in some software in a headless environment

At the moment the main benefit of Windows containers is process isolation.

Windows containers can't be

Extending the base image.

You should be inheriting from a specific tag. As mentioned above, there is no Microsoft Docker Server Core image 'latest' tag so you must go to the tag list and determine the most stable 

FROM microsoft/windowsservercore:
LABEL maintainer "Joel Murphy"




## Conclusion
I hope this tutorial has given you some guidance on how to develop Docker Containers for Windows.