# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H).

## Table of contents

- [Frontend Mentor - Social media dashboard with theme switcher solution](#frontend-mentor---social-media-dashboard-with-theme-switcher-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
  - [Getting Started](#getting-started)
    - [Running the Project](#running-the-project)
    - [For Developers (Modifying Styles)](#for-developers-modifying-styles)
  - [Author](#author)

---

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See dynamic hover states for all interactive elements on the page.
- Toggle the color theme between Light and Dark mode, with their preference saved.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add your Solution Link here]
- Live Site URL: [Add your Live Site Link here]

---

## My Process

### Built With

* **Semantic HTML5** markup
* **SCSS (Sass)** preprocessor for highly modular and maintainable styles
* **CSS Custom Properties (Variables)** for robust theming
* Flexbox and **CSS Grid** for responsive layout
* **Vanilla JavaScript** for theme logic and local storage management

### What I Learned

This project was a great opportunity to implement advanced UI/UX features and best practices:

1.  **Robust Theme Switching:** The JavaScript handles system preferences (`prefers-color-scheme`), uses local storage to remember the user's choice, and synchronizes the state with the accessible radio toggle control.
2.  **Advanced CSS Animations:** Custom keyframe animations were added to enhance user feedback on hover:
    * **Wobble and Scale:** The main social media icons animate with a slight rotation and size increase on hover, giving a high-energy "pop" effect.
    * **Directional Bounce:** The growth/decline arrows animate with a single, subtle vertical bounce (up or down) to visually reinforce the data trend.
3.  **Precise Selector Control:** The `:not()` pseudo-class was used to ensure the two distinct hover animations (wobble/scale vs. bounce) were applied only to their intended images, preventing visual clutter.

---

## Getting Started

The necessary files are already compiled and ready to use in the `dist` folder (`style.css` and `script.js`).

### Running the Project

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL_HERE]
    ```
2.  **Open the file:**
    Simply open the `index.html` file in your web browser.

### For Developers (Modifying Styles)

If you plan to modify the styles, you will need a compiler (like Node-Sass or similar tool) to process the source SCSS files (e.g., `colors.scss`, `card.scss`, etc.) into the final `style.css` file.

---

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@Ur-Village-People](https://www.frontendmentor.io/profile/Ur-Village-People)
- Twitter - [@UrVillag3P3opl3](https://www.twitter.com/UrVillag3P3opl3)