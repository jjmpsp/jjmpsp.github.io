---
title: Recover data loss of web projects
tags:
  - html
  - css
  - javascript
  - data
  - loss
  - recovery
description: Sample code demonstrating how to loop over any collection type in Jekyll
ogDescription: Sample code demonstrating how to loop over any collection type in Jekyll
---

{% include archived-post.md %}

<div class="entry-content">
		<div class="getsocial gs-inline-group"></div>
<p><br><a href="http://localhost:81/wordpress/wp-content/uploads/2014/06/cache_joel_murphy.png"><img class="alignnone size-full wp-image-242" src="http://localhost:81/wordpress/wp-content/uploads/2014/06/cache_joel_murphy.png" alt="cache_joel_murphy" width="560" height="250"></a></p>
<p>For the past 2 weeks I’ve been working on a new website that contains quite a few custom HTML elements. After finishing a huge chunk of the work, I decided to push the project to GitHub, as I usually do for all big projects.</p>
<p>As I went to push the project up to GitHub, I noticed that there were some changes to the repository that had to be pulled first. As tired as I was, I went ahead and pulled these changes without actually realising that I was syncing my work with the incorrect repository! Then I headed off to bed for some well needed sleep.</p>
<p>The next day I came on and freaked out to see that ALL of my work had gone – everything. I was like “wtf man, has someone been on my laptop whilst I was sleeping and deleted everything?”. Then I began to investigate.</p>
<p><span id="more-240"></span></p>

<!--more-->

<p>I opened my project in Finder and noticed that all PHP files were in fact gone from the directory. However, I also noticed that the project folder structure was still intact.</p>
<p>I then opened Sublime Text and noticed that all PHP files were inside the temporary file buffer, all code within them had gone, but they could be saved as empty files. I tried undoing changes, but unfortunately there weren’t any to undo. Damn.</p>
<p>I then decided to delete the .git folder and re-initialise the repository to see what was going on* (big mistake – see later comments).</p>
<p>I then browsed the repository on GitHub and noticed that something strange had happened – the repository had merged code with a previous project I was working on. I soon figured that I must have added the wrong repository URL when setting up the repository on my local machine. Damn.</p>
<p>After spending about an hour Googling for a solution, I came to accept that I had lost my work and that I would have to face my mistake and start my project again.</p>
<p>Just as I was about to give up hope, it hit me that Chrome stores cached versions of anything you access within the browser, so I decided to open the cache and see what I could find. I did this by typing the following into the Omnibox in Chrome:</p>
<div id="wpshdo_1" class="wp-synhighlighter-outer"><div id="wpshdt_1" class="wp-synhighlighter-expanded"><table border="0" width="100%"><tbody><tr><td align="left" width="80%"><a name="#codesyntax_1"></a><a id="wpshat_1" class="wp-synhighlighter-title" href="#codesyntax_1" onclick="javascript:wpsh_toggleBlock(1)" title="Click to show/hide code block">Code block</a></td><td align="right"><a href="#codesyntax_1" onclick="javascript:wpsh_code(1)" title="Show code only"><img border="0" style="border: 0 none" src="http://localhost:81/wordpress/wp-content/plugins/wp-synhighlight/themes/default/images/code.png"></a>&nbsp;<a href="#codesyntax_1" onclick="javascript:wpsh_print(1)" title="Print code"><img border="0" style="border: 0 none" src="http://localhost:81/wordpress/wp-content/plugins/wp-synhighlight/themes/default/images/printer.png"></a>&nbsp;<a href="http://localhost:81/wordpress/wp-content/plugins/wp-synhighlight/About.html" target="_blank" title="Show plugin information"><img border="0" style="border: 0 none" src="http://localhost:81/wordpress/wp-content/plugins/wp-synhighlight/themes/default/images/info.gif"></a>&nbsp;</td></tr></tbody></table></div><div id="wpshdi_1" class="wp-synhighlighter-inner" style="display: block;"><pre class="text" style="font-family:monospace;">chrome://cache/</pre></div></div>
<p>To my surprise, I found cached versions of every single file/page I had created for the project! I saved those cache files and used this <a href="http://www.sensefulsolutions.com/2012/01/viewing-chrome-cache-easy-way.html"><strong>extremely helpful</strong> tool</a>&nbsp;to decode the raw binary versions of the cache files back into human readable text.</p>
<p>Now that I had the HTML and CSS back for each file within my project, I began to copy and paste each file back manually until I had a usable project again which navigated to multiple pages. I still had to code all of the PHP within project again, but this was nothing more than setting up a few URL routes, which only took a few hours. A few hours is still a long time, but it certainly beats rewriting everything from scratch!</p>
<p>So, how could this issue been completely prevented? Well, here are a few tips I would suggest doing whilst working on a project:</p>
<ol>
<li>Backup. We’ve heard it a million times before, but we still don’t do it. You can do this by zipping your project every now and then, then archiving it safely on an external storage device or cloud service.</li>
<li>Turn on the autosave feature in your text editor. My text editor of choice is Sublime text which supports automatic backups of your projects.</li>
<li>Leave Google Chrome to cache files so you can recover data. This is what really saved my ass in this particular instance.</li>
<li>Don’t re-initialise a git repository if something does mess up. You can always rollback to a previous commit to recover your work. This is something that I completely forgot about before deleting the .git folder!</li>
<li>Always confirm that you’ve added the correct remote URL of a repository before pushing up your code. You can do this by typing the following command into your terminal:</li>
</ol>
<div id="wpshdo_2" class="wp-synhighlighter-outer"><div id="wpshdt_2" class="wp-synhighlighter-expanded"><table border="0" width="100%"><tbody><tr><td align="left" width="80%"><a name="#codesyntax_2"></a><a id="wpshat_2" class="wp-synhighlighter-title" href="#codesyntax_2" onclick="javascript:wpsh_toggleBlock(2)" title="Click to show/hide code block">Code block</a></td><td align="right"><a href="#codesyntax_2" onclick="javascript:wpsh_code(2)" title="Show code only"><img border="0" style="border: 0 none" src="http://localhost:81/wordpress/wp-content/plugins/wp-synhighlight/themes/default/images/code.png"></a>&nbsp;<a href="#codesyntax_2" onclick="javascript:wpsh_print(2)" title="Print code"><img border="0" style="border: 0 none" src="http://localhost:81/wordpress/wp-content/plugins/wp-synhighlight/themes/default/images/printer.png"></a>&nbsp;<a href="http://localhost:81/wordpress/wp-content/plugins/wp-synhighlight/About.html" target="_blank" title="Show plugin information"><img border="0" style="border: 0 none" src="http://localhost:81/wordpress/wp-content/plugins/wp-synhighlight/themes/default/images/info.gif"></a>&nbsp;</td></tr></tbody></table></div><div id="wpshdi_2" class="wp-synhighlighter-inner" style="display: block;"><pre class="text" style="font-family:monospace;">git remote -v</pre></div></div>
<p>This will list both, your fetch and push repository locations so you can confirm that they’re correct.</p>
<p>&nbsp;</p>
<div id="wpshdo_3" class="wp-synhighlighter-outer"><div id="wpshdt_3" class="wp-synhighlighter-expanded"><table border="0" width="100%"><tbody><tr><td align="left" width="80%"><a name="#codesyntax_3"></a><a id="wpshat_3" class="wp-synhighlighter-title" href="#codesyntax_3" onclick="javascript:wpsh_toggleBlock(3)" title="Click to show/hide code block">Code block</a></td><td align="right"><a href="#codesyntax_3" onclick="javascript:wpsh_code(3)" title="Show code only"><img border="0" style="border: 0 none" src="http://localhost:81/wordpress/wp-content/plugins/wp-synhighlight/themes/default/images/code.png"></a>&nbsp;<a href="#codesyntax_3" onclick="javascript:wpsh_print(3)" title="Print code"><img border="0" style="border: 0 none" src="http://localhost:81/wordpress/wp-content/plugins/wp-synhighlight/themes/default/images/printer.png"></a>&nbsp;<a href="http://localhost:81/wordpress/wp-content/plugins/wp-synhighlight/About.html" target="_blank" title="Show plugin information"><img border="0" style="border: 0 none" src="http://localhost:81/wordpress/wp-content/plugins/wp-synhighlight/themes/default/images/info.gif"></a>&nbsp;</td></tr></tbody></table></div><div id="wpshdi_3" class="wp-synhighlighter-inner" style="display: block;"><pre class="text" style="font-family:monospace;">origin https://github.com/jjmpsp/xxx.git (fetch)
&nbsp;
origin https://github.com/jjmpsp/xxx.git (push)</pre></div></div>
<p>&nbsp;</p>
<p>I hope you found the tips in this post useful and you can recover your web project if it has been lost, for whatever the reason may be.</p>
<p>Cheers,</p>
<p>Joel</p>
			</div>