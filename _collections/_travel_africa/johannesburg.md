---
title: Joel's Travels in Johannesburg, Africa
tags:
  - Johannesburg
  - South Africa
  - Travel
  
images:
- /static/img/travel/9c3ba898-cc49-45ca-91dc-c194da8f79e8.jpg
- /static/img/travel/IMG_5549.JPG
- /static/img/travel/IMG_5559.JPG
- /static/img/travel/IMG_5585.JPG
- /static/img/travel/IMG_5619.JPG
- /static/img/travel/IMG_5623.JPG
- /static/img/travel/IMG_5652.JPG
description: 
ogDescription: 
---

{{ site.baseurl }} ss

Here's an example for multiple images that uses Bootstrap's card columns for a Masonry-like layout. It's not perfect, but with some careful ordering of the images, you can get some good results. This example also shows some Liquid tags used in conjunction with frontmatter variables to automatically create your layout.

<!--more-->

To automate the layout, a list of images is stored in a frontmatter variable. The post then loops over that list to output the cards. This is easier than copy-pasting the same HTML for each image.

Here's the card columns in action.

<div class="card-columns">
    {% for img in page.images %}
    <div class="card">
        <img class="card-img-top" src="{{ img }}" />
    </div>
    {% endfor %}
</div>
