# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

While working on this project, I learnt how to make the questions hide/show answers using keyboard navigation alone.

This is done by adding attribute of "tagindex" to the html tag and assigning it a value of "0". This allows the tab key navigation to move accross the tag.

```html
<h1 tabindex="0">Press Enter to Show/Hide</h1>
```
The JS code below allows for the answers to show/hide when the enter key is pressed

```js
document.addEventListener("keypress", function(e)){
  if(e.key == "Enter" && e.target.classList.contains("accordion-head")){
    e.preventDefault();
    e.target.click();
  })
})
```

### Useful resources

- [Making HTML Tags accessible](https://www.brianshim.com/webtricks/make-html-tag-selectable-using-tab-accessibility/) - This article helped me on how to make html tags accessble with the tab key.


## Author

- Github - [victorrmark](https://www.github.com/victorrmark)
- Frontend Mentor - [@victorrmark] (https://www.frontendmentor.io/profile/victorrmark)
- Twitter - [@victorrmark](https://www.twitter.com/victorrmark)
