---
title: How to create Docker containers for Windows 
---

This tutorial describes how to develop Docker containers for Windows.

<!--more-->

## The problem
Part of my work at my current workplace (NHS Wales) is to develop Windows Docker Containers to recreate some of our infrastructure locally.
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


Getting into the container
So just like a real system, it would be nice to 'hop onto' the system and do some sysadmin work. 
Let's get started with that.

From your Host Operating System, issue the following command:

```
docker exec -it <name_of_container> powershell
```

Here's a real life example:

```
docker exec -it suspicious_galois powershell
```

This will fire up a powershell terminal. If you've done some work with Linux Docker containers you should be able to start to see the power of this already.

This is how you will inspect the windows container for underlying issues. As a step further you an do things such as configure WinRM for advanced control over the container without using the docker binary. That's outside of the scope of this tutorial though.

<div class="card mb-3">
    <img class="card-img-top" src=""{{ site.baseurl }}/static/img/tutorials/docker-windows-containers-powershell.PNG" title="Windows Docker Containers" alt="Windows Docker Containers" />
</div>

Nice! You can exit out of this container by simply typing 'exit' - it couldn't be easier really.

```
exit
```

## Conclusion
I hope this tutorial has given you some guidance on how to develop Docker Containers for Windows.