# [DEPRECTATED] Buoy [![Build Status](https://travis-ci.org/cferdinandi/buoy.svg)](https://travis-ci.org/cferdinandi/buoy)

***Note:*** *This projects has been deprecated and is no longer supported.*

A lightweight collection of helper methods for getting stuff done in native JavaScript.

[Download Buoy](https://github.com/cferdinandi/buoy/archive/master.zip)



## Usage

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

Include Buoy on your site to begin using the methods in your scripts.

```html
<script src="dist/js/buoy.js"></script>
```

### Methods

#### buoy.ready()

Wait until the DOM is ready before executing code.

```js
/**
 * @param {Function} fn The function to execute when the DOM is ready
 */
buoy.ready = function ( fn ) {

    // Sanity check
    if ( typeof fn  !== 'function' ) return;

    // If document is already loaded, run method
    if ( document.readyState === 'complete'  ) {
        return fn();
    }

    // Otherwise, wait until document is loaded
    document.addEventListener( 'DOMContentLoaded', fn, false );

};

// Example
buoy.ready(function () {
   console.log('The DOM will see you now.');
});
```

#### buoy.forEach()

A simple forEach() implementation for Arrays, Objects and NodeLists [by Todd Motto](https://github.com/toddmotto/foreach).

```js
/**
 * @param {Array|Object|NodeList} collection Collection of items to iterate
 * @param {Function}              callback   Callback function for each iteration
 * @param {Array|Object|NodeList} scope      Object/NodeList/Array that forEach is iterating over (aka `this`)
 */
buoy.forEach(collection, callback, scope);

// Examples
buoy.forEach(['A', 'B', 'C', 'D'], function (value, index) {
    console.log(value); // A, B, C, D
    console.log(index); // 0, 1, 2, 3
});

buoy.forEach({ name: 'Todd', location: 'UK' }, function (value, prop, obj) {
    console.log(value); // Todd, UK
    console.log(prop); // name, location
    console.log(obj); // { name: 'Todd', location: 'UK' }, { name: 'Todd', location: 'UK' }
});
```

#### buoy.extend()

Merge two or more objects. Returns a new object.

```js
/**
 * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
 * @param {Object}   objects  The objects to merge together
 * @returns {Object}          Merged values of defaults and options
 */
buoy.extend( [deep], object1, object2, ... );

// Examples
var object1 = {
    apple: 0,
    banana: {
        weight: 52,
        price: 100
    },
    cherry: 97
};
var object2 = {
    banana: {
        price: 200
    },
    durian: 100
};
var object3 = {
    apple: 'yum',
    pie: 3.214,
    applePie: true
}

var newObject = buoy.extend( object1, object2, object3 ); // Shallow extend
var newObjectDeep = buoy.extend( true, object1, object2, object3 ); // Deep extend
```

#### buoy.getHeight()

Get the height of an element.

```js
/**
 * @param  {Node} elem The element to get the height of
 * @return {Number}    The element's height in pixels
 */
buoy.getHeight( elem );

// Example
var elem = document.querySelector( '#example' );
var height = buoy.getHeight( elem ); // 42
```

#### buoy.getOffsetTop()

Get an element's distance from the top of the Document.

```js
/**
 * @param  {Node} elem The element
 * @return {Number}    Distance from the top in pixels
 */
buoy.getOffsetTop( elem );

// Example
var elem = document.querySelector( '#example' );
buoy.getOffsetTop( elem ); // 133
```

#### buoy.getClosest()

Get the closest matching element up the DOM tree. Match by class, ID, data attribute, or tag.

```js
/**
 * @param {Element} elem     Starting element
 * @param {String}  selector Selector to match against (class, ID, data attribute, or tag)
 * @return {Boolean|Element} Returns null if not match found
 */
buoy.getClosest( elem, selector );

// Examples
var elem = document.querySelector( '#example' );
var closestClass = buoy.getClosest( elem, '.example' ); // <div class="example">Some class</div>
var closestID = buoy.getClosest( elem, '#example-2' ); // <div class="example-2">Some ID</div>
var closestAttribute = buoy.getClosest( elem, '[data-example]' ); // <div data-example="something">Some data attribute</div>
var closestTag = buoy.getClosest( elem, 'p' ); // <p>Some tag</p>
```

#### buoy.getParents

Get an element's parent nodes. Optionally filter by class, ID, data attribute, or tag.

```js
/**
 * @param  {Node}   elem     The element
 * @param  {String} selector Selector to match against (class, ID, data attribute, or tag) [optional]
 * @return {Array}           An array of matching nodes
 */
buoy.getParents( elem, [selector] );

// Examples
var elem = document.querySelector( '#example' );
var parents = buoy.getParents( elem ); // [<div>...</div>, <article>...</article>, <section>...</section>]
var parentsWithClass = buoy.getParents( elem, '.example' ); // [<div class="example">...</div>, <article class="example">...</article>]
var parentsWithID = buoy.getParents( elem, '#example-2' ); // [<div id="example-2">...</div>]
var parentsWithAttribute = buoy.getParents( elem, '[data-example]' ); // [<div data-example="something">...</div>, <section data-example="something else">...</section>]
var parentsWithTag = buoy.getParents( elem, 'div' ); // [<div>...</div>, <div>...</div>]
```

#### buoy.getSiblings()

Get an element's sibling nodes.

```js
/**
 * @param  {Node} elem The element
 * @return {Array}     An array of sibling nodes
 */
buoy.getSiblings( elem );

// Example
var elem = document.querySelector( 'li#example' );
var siblings = buoy.getSiblings( elem ); // [<li>A</li>, <li>B</li>, <li>C</li>]
```

#### buoy.getQueryString()

Get data from a URL's query string.

```js
/**
 * @param  {String} field The field to get from the URL
 * @param  {String} url   The URL to parse
 * @return {String}       The field value
 */
buoy.getQueryString = function ( field, url );

// Example
var url = 'http://example.com?name=peter&superhero=spiderman';
var superhero = buoy.getQueryString( 'superhero', url ); // spiderman
```


### Installing with Package Managers

You can install Buoy with your favorite package manager.

* **NPM:** `npm install cferdinandi/buoy`
* **Bower:** `bower install https://github.com/cferdinandi/buoy.git`
* **Component:** `component install cferdinandi/buoy`



## Browser Compatibility

Buoy works in all modern browsers, and IE 8 and above.



## How to Contribute

In lieu of a formal style guide, take care to maintain the existing coding style. Please apply fixes to both the development and production code. Don't forget to update the version number, and when applicable, the documentation.



## Working with the Source Files

If you would prefer, you can work with the development code in the `src` directory using the included [Gulp build system](http://gulpjs.com/). This compiles, lints, and minifies code.

### Dependencies
Make sure these are installed first.

* [Node.js](http://nodejs.org)
* [Gulp](http://gulpjs.com) `sudo npm install -g gulp`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files.
3. When it's done installing, run one of the task runners to get going:
	* `gulp` manually compiles files.
	* `gulp watch` automatically compiles files and applies changes using [LiveReload](http://livereload.com/).



## License

The code is available under the [MIT License](LICENSE.md).
