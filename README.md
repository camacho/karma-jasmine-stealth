karma-jasmine-stealth
==========
Adds support for [jasmine-stealth](https://github.com/searls/jasmine-stealth)

Installation
------------

```sh
$ npm install karma-jasmine-stealth --save-dev
```

Add `jasmine-stealth` to the `frameworks` key in your Karma configuration, before `jasmine`:

```js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine-stealth', 'jasmine']
  });
}
```
