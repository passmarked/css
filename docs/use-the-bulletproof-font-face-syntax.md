Internet Explorer 6, 7 and 8 incorrectly parse URIs to font files contained within `@font-face` declarations causing the browser to return a 404 error code for the resource. 

```css
@font-face {
    font-family: 'BrokenFont';
    src: url('broken-font.eot') format('embedded-opentype');
    /* the URI `broken-font.eot` will not be 
       parsed correctly by Internet Explorer */
}

/* instead, do... */

@font-face {
    font-family: 'WorkingFont';
    src: url('working-font.eot?#iefix') format('embedded-opentype');
}
```

# How do I fix this ?

Simply append a query-string value to the URI. The query-string value will cause Internet Explorer to parse the URI correctly. Be sure to use a query-string value that will remind you of its importance (such as `?#iefix`) to avoid accidental removal.  

# Resources

* [Paul Irish](http://www.paulirish.com/2009/bulletproof-font-face-implementation-syntax/)
* [csslint wiki](https://github.com/CSSLint/csslint/wiki/Bulletproof-font-face)
