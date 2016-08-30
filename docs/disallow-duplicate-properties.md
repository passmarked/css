A block in a stylesheet may have zero or more declarations. While syntactically correct, duplicate declarations add unnecessary size to a stylesheet and can increase interpretation time. Instances can occur where duplicate declarations are needed, for instance when supporting multiple browsers with varying levels of support for a given property.

```css
.an .element {

    /* this is not valid */
    color: red;
    background-color: crimson;
    color: blue;

    /* this is valid */
    color: rgb(255, 255, 255);
    color: rgba(255, 255, 255, 1);
}
```

# How do I fix this ?

Check all stylesheets for the presence of two or more identical properties in any selector block and remove the one that is unneeded or erroneous.

# Resources

* [csslint wiki](https://github.com/CSSLint/csslint/wiki/Disallow-duplicate-properties)
