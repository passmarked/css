CSS selector specificity determines which style declarations are applied to a set of elements and in which order. Use of the `!important` suffix allows for overriding of this application order (and the regular source-ordering of CSS interpretation) for any given selection of elements. Uncontrolled use of this language feature can render a stylesheet unmaintainable, forcing developers to compound their use of `!important`.

```css
.just .specific .enough {
    text-align: right !important;
    /* this declaration applies even though 
       the selector (below) is more specific */
}

.a .crazy .ultra .super .specific .selector {
    text-align: center;
    font-weight: 600;
}

/*
   instead, you could do something like...
*/

/* we reduced the specificity of this selector */
.a .super .selector {
    text-align: center;
    font-weight: 600;
}

/* the specificity of this selector is now equal to the one above
   allowing the style declarations to comfortably override */
.just .specific .enough {
    text-align: right;
}
```

# How do I fix this ?

Refactoring must be performed on the stylesheet in question. Programmers should aim to reduce the overall specificity of selectors throughout their stylesheets and to honour CSS's normal source-ordering principles.

# Resources

* [MDN CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
* [CSS Specificity Graph](https://jonassebastianohlsson.com/specificity-graph/)
* [csslint wiki](https://github.com/CSSLint/csslint/wiki/Disallow-!important)
