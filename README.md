# Buoy (IN DEVELOPMENT) [![Build Status](https://travis-ci.org/cferdinandi/buoy.svg)](https://travis-ci.org/cferdinandi/buoy)
A lightweight collection of helper methods for getting stuff done in native JavaScript.

[Download Buoy](https://github.com/cferdinandi/buoy/archive/master.zip)

**In This Documentation**

1. [Getting Started](#getting-started)
2. [Installing with Package Managers](#installing-with-package-managers)
3. [Working with the Source Files](#working-with-the-source-files)
4. [Options & Settings](#options-and-settings)
5. [Browser Compatibility](#browser-compatibility)
6. [How to Contribute](#how-to-contribute)
7. [License](#license)



## Getting Started

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code. If you're using Buoy with [Kraken](http://cferdinandi.github.io/kraken/), use Kraken's `gulpfile.js` instead of this one.

Include Buoy on your site to begin using the methods in your scripts.

```html
<script src="dist/js/buoy.js"></script>
```



## Installing with Package Managers

You can install NAMEPSACE-UP with your favorite package manager.

* **NPM:** `npm install cferdinandi/buoy`
* **Bower:** `bower install https://github.com/cferdinandi/buoy.git`
* **Component:** `component install cferdinandi/buoy`



## Working with the Source Files

If you would prefer, you can work with the development code in the `src` directory using the included [Gulp build system](http://gulpjs.com/). This compiles, lints, and minifies code. It's based on the same build system that's used by [Kraken](http://cferdinandi.github.io/kraken/), so it can be dropped right in to the boilerplate without any configuration.

### Dependencies
Make sure these are installed first.

* [Node.js](http://nodejs.org)
* [Gulp](http://gulpjs.com) `sudo npm install -g gulp`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files.
3. When it's done installing, run one of the task runners to get going:
	* `gulp` manually compiles files.
	* `gulp watch` automatically compiles files when changes are made.
	* `gulp reload` automatically compiles files and applies changes using [LiveReload](http://livereload.com/).



## Methods

Coming soon...



## Browser Compatibility

Buoy works in all modern browsers, and IE 9 and above.

Buoy is built with modern JavaScript APIs, and uses progressive enhancement. If the JavaScript file fails to load, or if your site is viewed on older and less capable browsers, all content will be displayed by default.



## How to Contribute

In lieu of a formal style guide, take care to maintain the existing coding style. Please apply fixes to both the development and production code. Don't forget to update the version number, and when applicable, the documentation.



## License

The code is available under the [MIT License](LICENSE.md).