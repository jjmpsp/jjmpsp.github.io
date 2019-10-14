---
title: WCAG 2.1 accessibility training
tags:
  - wcag
  - accessibility
  - training
description: Cloud Native London 2019 Review
ogDescription: Cloud Native London 2019 Review
---

Dac training – Digital accessibility centre

WCAG 2.1
Best design, techniques, code samples.

Accessibility is ensuring that all web based platforms and applications are accessible to ALL regardless of ability or age.

Equality act 2010 – avoid legal action

Positive PR in healthcare

WCAG 2.1
POUR Principles 
- Perceivable 
- Operable
- Understandable
- Robust

13 guidelines
78 success criteria

A – High priority
AA – Medium priority
AAA – Low priority 

4 basic user groups:
- Physical (disabled physically)
- Cognitive (asperges, autism)
- Hearing (deaf from birth, partial hearing loss)
- Vision (low vision or blindness)

Types of assistive technologies

Desktop
- Voiceover (Mac)
- Jaws (Windows)
- NVDA (freeware)
- Switch control / keyboard only
- Speeach to text (Dragon Naturally speaking)
- Zoom / magnification 

Mobile
Text to speech for Android (Talkback)
- Speech To Text for android (s-voice)
- Switch control for android 
- Text to speech for ios (voiceover)
- Speech to text for ios (siri)
- Etc.

Low vision
Ziad (the speaker) only has 5% vision in his right eye.
“Developers haven’t made any difference – they’ve made THE DIFFERENCE”
Ziad has regained independence thanks to assistive technology. People’s lives are improved from this sort of work.

Text may not be large enough to read so would need to resize to zoom into content
Contract between text and the background may not be sufficient (W3C ratio 4.5.:1)
Do not cause content to update elsewhere on screen after selecting an item

Do not use ‘maximum scale 1’ as this completely disables zoom on mobile 
Ensure content does not update on screen after making a selection
Carousels tend to cause problems for screen readers as they constantly read out text. If you have to use a carousel on a page then be sure to add a pause button to make it more accessible

Popups and modals steal focus and are bad for screen readers

UX design best practise – colour contrast. Colour contrast analyser is a good free tool for this

Colour contrast to meet AA standard is 7:1

Do not use colour as the only indicator for a currently selected item on page (use aria metadata instead)

Physical
Keyboard controls is controlled by the tab key 
Spacebar or enter is used to active elements and links

Don’t use buttons as links

Dragon voice activation has a series of commands for interacting with webpage elements. E.g. ‘Click link’, ‘Click box’

Focus highlighting on background should have a good contrast. E.g. light blue on blue is useless

Captchas are not good at all for accessibility. Use a fallback.

Cognitive
- Reading age may be lower
- Busy page layout can be confusing (KISS)
- Dyslexia needs to be considered (font-style, text alignment)
- May easily distracted by animation
- Stick to left hand alignment
- Don’t use acronyms and abbreviations
- Tooltip popups on abbreviations
- Use images and text. Just images are bad
- Avoid flickering blinking and moving images and images of text
- If images flicker at a rate of more than 3 flashes per second, don’t use them

Hearing
Close Captions (CC) on videos
Open captions are available to everybody as they’re always there
Closed captions can be toggled as an optional feature
This is the difference between open and closed captions 
VTML or web VTT file formats for videos. This can be specified in HTML video tags
“Flesch Kincaid” language test

Blind users
Ensure users are notified before opening a new layer or pop up
Ensure focus is placed on the new layer or pop up and trapped within the pop up when it appears.
All images should have a valid alt attribute
Give information about the image in relevance to the content on the page 
‘Aria-hidden=”true”’ won’t be shown by assistive technology
Class=”sr-only”  only screenreaders can see the specific element
Open in new windows – show an icon so screenreaders are made aware that a link opens in a new window
Pagination – go to first page is read out as two left chevrons
Download buttons to files – Show filetype to user and download size
Aria-label overrides text on an element which is really handy for creating appropriate texts for screenreaders
Skiplinks should be used to skip to main content to avoid the user having to scoll down the page
Page title – ({name of current page} – {name of website})
Tables – use a <caption> element to describe a table in the same way you would use a heading. A caption helps users find, navigate, and understand tables
Use the ‘scope’ attribute to help distinguish between rows and columns.
Headings should be hierarchical. Css should be used to style headings, not actual headings.
Headings should never be empty
Fieldsets should be used with grouped elements such as radio buttons and checkboxes.
Use “aria-invalid” attribute for adding errors to a form
Hint text is useful in forms as it can be used to provide a real example
Give users enough time to complete a particular action on a webpage
Notify a user if a session is about to timeout (adhere to security)
Hint: Mobile number inputs – ensure it’s possible to input a space or specify it’s not possible to use them.
Use lang=”cy” for welsh content on an individual element basis
‘View more link’ <- be more descriptive with these. E.g. ‘View more vanancies at {CompanyName}”
‘Axe’ is a free extension for chrome that can be downloaded to inspect and validate aria labels.

Provide a page on the website giving accessibility instructions

Accessibility ratings are done on a page-by-page basis

HTML5 and aria

```<header>``` for headers
```<nav>``` for navigations
```<main>``` for main content
```<section>``` or ```<article>``` for semantics
```<aside>``` complementary information
```<footer>``` the footer

Aria-role
https://www.sitepoint.com/how-to-use-aria-effectively-with-html5/

aria-current for navigation (breadcrumb trails, step processes, etc)

aria-labelledby can group together content by different ids

aria-describedby is useful for hint texts. They are very similar to aria-labels but are read out differently by screenreaders

aria-alert & aria-live speaks things out straight.

Aria-tab

Aria-expanded

‘Sortsite’ is a spidering tool that runs fully automated accessibility checks

Along with automated testing, UAT is always helpful for testing UX and accessibility.
