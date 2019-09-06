---
title: How to export Visual Studio Code Plugins list
tags:
  - visual
  - studio
  - code
  - visual studio code
  - export
  - plugins
description: 
ogDescription: 
---

You may have a situation where you need to export your config to another machine, or you may want to share your visual studio code plugins list with another developer.
Luckily, there is a nice way of doing this through the command line.

<!--more-->

Machine A:

In VSCode Powershell terminal :

code --list-extensions > extensions.list

Machine B:

Copy extension.list to the machine B

In VSCode Powershell terminal :

cat extensions.list |% { code --install-extension $_}


Many thanks to @milanio on StackOverflow for this great solution.
https://stackoverflow.com/a/49936683/1007680



<!--more-->

