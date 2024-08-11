# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](/images/Screenshot%202024-08-10%20at%2022-21-44%20Frontend%20Mentor%20Interactive%20rating%20component.png)

### Links

- Live Site URL: [https://interactive-rating-component-main-rouge-nine.vercel.app](https://interactive-rating-component-main-rouge-nine.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Basic JavaScript

### What I learned

I learned a little bit of how to use the submit button. In this project I used submit along with the display tag, where I hid one container and showed the other one.<br>
I also learned how to add value to buttons, later I saw an easier way to do it (using .innerHTML), but I am still proud of the way I did it.

This is how I used the submit button:

```js
submitBtn.addEventListener("click", () => {
  if (rating.textContent === "") {
    window.alert("Please select a rating");
  } else {
    thankYouContainer.classList.remove("hidden");
    rateContainer.style.display = "none";
  }
});
```

### Continued development

I still take a lot of time to name things in HTML, sometimes I don't know if just naming things as paragraphs or buttons are the right way.<br>
I feel like my code could be shorter and less confusing, principally in css. Someday I will definitely need to learn how to use frameworks (also because most of the time in the project I was dealing with css).

## Author

- Frontend Mentor - [@LeandroJr730](https://www.frontendmentor.io/profile/LeandroJr730)
- Instagram - [@leandrojr730](https://www.instagram.com/leandrojr730/)
