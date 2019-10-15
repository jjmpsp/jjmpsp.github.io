---
title: Snapchat QR codes / snapcodes API?
tags:
  - beards
  - internet
  - prank
description: Sample code demonstrating how to loop over any collection type in Jekyll
ogDescription: Sample code demonstrating how to loop over any collection type in Jekyll
---

{% include archived-post.md %}

<div class="entry-content">
		<div class="getsocial gs-inline-group"></div>
<p><br><img src="http://localhost:81/wordpress/wp-content/uploads/2015/05/Screen-Shot-2015-05-25-at-16.36.11.png" alt="Screen Shot 2015-05-25 at 16.36.11" class="img-fluid"></p>
<p>So recently I’ve been&nbsp;working on a website where one of the requirements is that it&nbsp;must have a strong connection with&nbsp;the brand’s social media presence. This means that a user coming to the website must be able to explore and interact with the brand’s social media content without having to leave the current page.</p>
<p>I’ve currently implemented the <a href="https://instagram.com/developer/embedding/">Instagram image embed widget</a>&nbsp;to interact with individual posts, made use of the <a href="https://developers.facebook.com/docs/graph-api">Facebook Graph API to get information about a page</a>, looked at <a href="https://developers.facebook.com/docs/plugins">Facebook’s embeddable plugins</a>&nbsp;for Facebook page interactions, and explored&nbsp;<a href="https://developers.google.com/+/web/badge/">Google’s embeddable badges</a>&nbsp;for interacting with Google Plus entities. But one major social media service appears&nbsp;to be missing – Snapchat.</p>
<p><span id="more-289"></span></p>
<p>Now although Snapchat is a social media for mobile devices only, it is still dominating the market with over 100 million active users. 400 million snaps are sent daily through the service, and 71% of its users are&nbsp;under 25 – making it essential for reaching out to the average teenager by marketers (as seen in the&nbsp;following slideshare presentation):</p>
<p><iframe style="border: 1px solid rgb(204, 204, 204); margin-bottom: 5px; max-width: 100%; width: 517px; height: 432px;" src="//www.slideshare.net/slideshow/embed_code/key/KvSpB9DJQ4V0pA" width="425" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen"> </iframe></p>
<div style="margin-bottom: 5px;"><strong> <a title="6 Snapchat Hacks Too Easy To Ignore" href="//www.slideshare.net/vaynerchuk/6-snapchat-hacks-too-easy-to-ignore" target="_blank">6 Snapchat Hacks Too Easy To Ignore</a> </strong> from <strong><a href="//www.slideshare.net/vaynerchuk" target="_blank">Gary Vaynerchuk</a></strong></div>
<div style="margin-bottom: 5px;"></div>

<!--more-->

<p>But&nbsp;what does this mean for webmasters? Should we simply ignore any social interaction with Snapchat as there isn’t an official Snapchat API available? Before, the answer to this would have been <strong>Yes!</strong>&nbsp;But now the answer to this is N<strong>o</strong>!</p>
<p>A few months ago, Snapchat added a new feature to its mobile apps where users could add friends by scanning their unique ‘SnapCode’. A SnapCode is essentially snapchat’s own implementation&nbsp;of the QR code specification. You can see an example SnapCode in the screenshot below:</p>
<p><img class="aligncenter wp-image-295 size-medium" src="http://localhost:81/wordpress/wp-content/uploads/2015/05/image-169x300.jpg" alt="image" width="169" height="300"></p>
<p>If you scan this SnapCode, a friend request will be sent to my personal snapchat account. This could potentially save&nbsp;users from having to manually search for my username using the app.</p>
<p>So how could this be implemented on a website? Well, all you’d need to do is include an image of your&nbsp;SnapCode inside it within your webpage. Sure, you could go ahead and do this manually by taking a screenshot of your SnapCode&nbsp;in the Snapchat app&nbsp;like I have above, but this isn’t really ideal if you want a higher resolution image. This is why&nbsp;Snapchat have now simplified this process by creating <a href="https://accounts.snapchat.com/accounts/snapcodes">a website dedicated to generating SnapChat QR codes, or SnapCodes</a>.</p>
<p>Snapchat’s new website&nbsp;is far from being an API to be able to generate a SnapCode QR codes for any user just yet, but you can freely&nbsp;<a href="https://accounts.snapchat.com/accounts/snapcodes?type=packaged">download your own SnapCode&nbsp;from SnapChat’s new SnapCode website</a>.</p>
<p>After downloading your SnapCode, you’ll&nbsp;have a zipped&nbsp;file which contains PNG and SVG versions of your Snapcode. You are then able to make&nbsp;customisations to your own SnapCode, but be sure to&nbsp;follow SnapChat’s&nbsp;guidelines and best practices for modifying the image containing the SnapCode. This is to ensure that the tag still works properly before it is printed or embedded on a website or anywhere else. There will be a PDF specification document inside the zipped folder which can help you with this.</p>
<p>Here’s an example of a SnapCode I edited earlier:</p>
<p>Original SnapCode:</p>
<p><img class="aligncenter wp-image-302 size-thumbnail" src="http://localhost:81/wordpress/wp-content/uploads/2015/05/snapcode-150x150.png" alt="snapcode" width="150" height="150"></p>
<p>&nbsp;</p>
<p>Edited SnapCode:</p>
<p><img class="aligncenter wp-image-308 size-thumbnail" src="http://localhost:81/wordpress/wp-content/uploads/2015/05/snapcode1-150x150.png" alt="snapcode" width="150" height="150"></p>
<p>As you can see, I have added my own content inside the Ghost of the Snapchat icon and my unique SnapCode data is still intact inside the image. This could&nbsp;be used for putting your own brand inside the image so users of your service can identify that you exist on Snapchat and add you as a friend if they wish.</p>
<p>This is just one of the ways snapchat has started to expand to reach out to new users. I’m sure the Snapchat team will&nbsp;be adding plenty&nbsp;more features like this in the future, and an official Snapchat API may soon become available. But for now, we’ll have to sit back and play the waiting game for&nbsp;anything more to be announced.</p>
<p>I hope this post has inspired you to start including Snapchat as a social media on your own websites / posters / videos or whatever you’re creating. I’m sure we’ll start seeing stickers put up in shop windows soon enough if this really catches on!</p>
			</div>