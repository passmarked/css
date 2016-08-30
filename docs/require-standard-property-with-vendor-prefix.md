When using vendor-prefixed properties such as `-moz-border-radius`, you should also include the standard property for future-compatibility. The standard property should come after the vendor-prefixed one to ensure the standard property is used by the browser.

```css
/* BAD — No standard property*/
.mybox {
    -moz-border-radius: 5px;
}

/* BAD — standard property in wrong position */
.mybox {
    border-radius: 5px;
    -moz-border-radius: 5px;
}

/* GOOD */
.mybox {
    -moz-border-radius: 5px;
    border-radius: 5px;
}
```

# How do I fix this ?

Putting the standard property after the vendor-prefixed property is the best way to ensure your CSS code will continue to work once the standard property is fully adopted (then you can take your time going back and removing the vendor-prefixed properties).

# Resources

* [CSSLint - Require standard property with vendor prefix](https://github.com/CSSLint/csslint/wiki/Require-standard-property-with-vendor-prefix)
