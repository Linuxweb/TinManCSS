<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="images/logo-dark.svg">
    <img src="images/logo-light.svg" alt="tinman.css, the css grid with heart" height="120">
  </picture>
</p>

# [TinManCSS](https://bit.ly/3N9XwxR)

[![GitHub issues](https://img.shields.io/github/issues/Linuxweb/TinManCSS?style=for-the-badge)](https://github.com/Linuxweb/TinManCSS/issues)
[![GitHub stars](https://img.shields.io/github/stars/Linuxweb/TinManCSS?style=for-the-badge)](https://github.com/Linuxweb/TinManCSS/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Linuxweb/TinManCSS?style=for-the-badge)](https://github.com/Linuxweb/TinManCSS/network)

Tinman.css is a dead simple, desktop first, responsive CSS boilerplate with a 12 column grid, a golden ratio type scale and built in light and dark themes. No build step, no toolchain: copy the folder and start building.

Check out [TinmanCSS](https://tinmancss.linuxweb.co.za/) for Documentation and Demo

# What's in the project?

A ready to use website starter. The source files in `css/` are readable and fully editable, and `dist/` has a minified copy of each one.

```
TinManCSS/
├── index.html          component showcase, exercises every component
├── demo.html           sample landing page
├── 400.html
├── 401.html
├── 403.html
├── 404.html
├── 500.html
├── 503.html
├── CHANGELOG.md
├── htaccess.txt
├── humans.txt
├── LICENSE
├── llms.txt
├── README.md
├── robots.txt
├── css/
│   ├── normalize.css
│   ├── tinman.css
│   ├── fonts.css
│   ├── colors.css
│   └── layout.css
├── dist/               minified copy of each stylesheet
│   ├── normalize.min.css
│   ├── tinman.min.css
│   ├── fonts.min.css
│   ├── colors.min.css
│   └── layout.min.css
├── images/
│   ├── icons/          icons for forms and notifications
│   ├── 403.jpg, 404.jpg, 500.jpg  (error page photos)
│   ├── favicon.svg, favicon.ico and PNG icons
│   ├── logo.svg        inline logo, takes the text colour
│   ├── logo-light.svg  static copies for the README
│   ├── logo-dark.svg
│   └── site.webmanifest
└── js/
    ├── application.js
    └── theme-toggle.js
```

`htaccess.txt` is an Apache configuration template. Rename it to `.htaccess` when you deploy.

---

# Why it's awesome?

Tinman.css is simple and lightweight. It styles raw html elements with other awesome features like a grid, tooltips and basic styles. Nothing more.

* About 1,100 lines of readable CSS across four files, including comments
* The minified files in `dist/` total about 21KB, and `tinman.css` on its own is under 10KB (about 3KB gzipped)
* Desktop first: the base styles are the desktop layout and queries step down for smaller screens
* Light and dark themes in one stylesheet, following the visitor's system or a button
* It's just a starting point. It is not a UI framework

---

# Browser support

The current versions of Chrome, Edge, Firefox and Safari. The colours use `light-dark()` and CSS custom properties, which need a browser from mid 2024 or later. Internet Explorer is not supported.

---

# Getting Started

#### HTML

No downloading, no compiling. Put the files in the `<head>`, in this order, because later files override earlier ones:

```html
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/tinman.css">
	<link rel="stylesheet" href="css/fonts.css">
	<link rel="stylesheet" href="css/colors.css">
	<link rel="stylesheet" href="css/layout.css">
```

For production swap in the files from `dist/`, which have the same names with `.min`:

```html
	<link rel="stylesheet" href="dist/normalize.min.css">
	<link rel="stylesheet" href="dist/tinman.min.css">
	<link rel="stylesheet" href="dist/fonts.min.css">
	<link rel="stylesheet" href="dist/colors.min.css">
	<link rel="stylesheet" href="dist/layout.min.css">
```

Each file has one job: `tinman.css` is structure, `fonts.css` the fonts, `colors.css` every colour, and `layout.css` is yours, for the styles that belong to your own site.

Open `index.html` to see every component and `demo.html` for a sample landing page to build from. The optional `js/theme-toggle.js` adds the light and dark button, and `application.js` and the toggle need [jQuery](https://jquery.com/), which the sample pages load from the jQuery CDN.

---

# Credits

A project by **[Selwyn Orren](https://github.com/linuxweb)** and [Others](https://github.com/Linuxweb/tinmancss/graphs/contributors) for an awesome and better web.

---

# Thanks

* Thanks to [Dave Gamache](https://github.com/dhg) for [Skeleton](http://getskeleton.com/). Its grid system is where all of this began, and without discovering it none of Tinman.css would exist
* Thanks to [Nicolas Gallagher](https://github.com/necolas) and Jonathan Neal for [Normalize.css](https://github.com/necolas/normalize.css)
* Thanks to [Matt McInerney](https://fonts.google.com/specimen/Raleway) for the Raleway typeface
* Thanks to [Font Awesome](https://fontawesome.com/v4/) for the icons and to the [jQuery](https://jquery.com/) team
* Thanks to [Unsplash](https://unsplash.com/) for the error page images

---

# License

Tinman.css is released under the MIT licence. It began as a derivative of Skeleton, which is also MIT licensed, so both copyright notices are in [LICENSE](LICENSE).

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Linuxweb/TinManCSS/blob/main/LICENSE)
