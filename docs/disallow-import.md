Use of the `@import` directive allows for the composition of stylesheets using smaller and more reusable chunks of code. Unfortunately, the `@import` directive triggers an HTTP request for the resource when encountered by the CSS interpreter which can result in decreased overall site performance.

```css
@import 'my-other-styles.css';
@import 'my-print-styles.css' print;
@import 'my-tv-styles' projection, tv;
```

# How do I fix this ?

Concatenate the contents of your stylesheets into one file and include that instead of multiple files.

# Resources

* [devdocs/css](http://devdocs.io/css/@import)
