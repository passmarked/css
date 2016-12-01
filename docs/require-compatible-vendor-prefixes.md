If you want the same CSS effects across all browsers, it's important to remember the vendor-prefixed properties for all supporting browsers:

```css
/* BAD: */

/* Missing -moz, -ms, and -o */
.mybox {
    -webkit-transform: translate(50px, 100px);
}

/* Missing -webkit */
.mybox {
    -moz-border-radius: 5px;
}
```

# How do I fix this ?

Add vendor-prefixed properties for all supporting browsers.

```css
/* GOOD: */

.mybox {
    -webkit-transform: translate(50px, 100px);
    -moz-transform: translate(50px, 100px);
    -ms-transform: translate(50px, 100px);
    -o-transform: translate(50px, 100px);
    transform: translate(50px, 100px);
}

.mybox {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}
```

# Resources
* [CSSLint - Require compatible vendor prefixes](https://github.com/CSSLint/csslint/wiki/Require-compatible-vendor-prefixes)
