Unqualified attribute selectors, such as `[type=text]`, match all elements first and then check their attributes. This means they have the same performance characteristics as the universal selector (`*`). Similar to the universal selector, unqualified attribute selectors cause performance issues when used as the key part (far-right) of a selector.

```
/* BAD */
.mybox [type=text] {
    background: #fff;
    color: #000;
    background: rgba(255, 255, 255, 0.5);
}
```

# How do I fix this ?

Don't make the unqualified attribute the key part of the selector, i.e. don't put it at the far right (which gets parsed first).

```
/* GOOD */
.selected [type=text] a {
    color: red;
}
```

# Resources

* [CSSLint - Disallow unqualified attribute selectors](https://github.com/CSSLint/csslint/wiki/Disallow-unqualified-attribute-selectors)
