# Backbone localStorage

[![Build Status](https://secure.travis-ci.org/moorinteractive/backbone-localstorage.png?branch=master)](https://travis-ci.org/moorinteractive/backbone-localstorage)

## Installing Backbone localStorage

The package can be installed through [npm](https://npmjs.org/) or [bower](http://bower.io/).

##### Using npm
```
npm install backbone-localstorage
```

##### Using bower
```
bower install backbone-localstorage
```

After installing the package, you can grab the `backbone-localstorage.js` or the minified version of it `backbone-localstorage.min.js`

## Atuclear localStorage when new content is available

Since many web applications have managable content, it's hard to determine when to recognize new content.
Just like caching software, the only thing we know about our data is the url and it's optional localStorage id.
With the method `setVerion` you can determine in which state of content the localStorage is set.
At the point you call this method verions are compared (in strict mode).
If the verion is not equal to it's, if present, previous version the localStorage will be cleared (only data set under `prefix`).
```
Backbone.LocalStorage.setVersion(100);
```
The value may be of any type (int, string, etc.).

## Changelog

0.2.1

* Fixed setVersion clear localStorage when verions differs

0.2.0

* Fixed issue return null when no localStorage can be found
* Added documentation

0.1.0 (released on friday, november 15, 2013)

* Prototype