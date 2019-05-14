---
layout: defaults/page
permalink: travel.html
narrow: true
---

## My travels

Up until 2011 I had only ever been on holiday to Spain.

<div id="map-canvas"></div>

<style>
#map-canvas { 
  height: calc(100vh - 60px); 
  margin: 0; 
  padding: 0;
}
</style>

<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGQdgVqTDsRWmrgkorSwmuWRAtdOW0Umk"></script>
<script type="text/javascript" src="/static/js/PlacesBeen.js"></script>

I have decided to document my experience in every single country visited.


{% for place in site.travel %}
- [{{ place.title }}]({{ page.baseurl }}{{ place.url }})
{% endfor %}