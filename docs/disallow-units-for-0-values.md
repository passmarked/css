You shouldn't specify any units after a `0` value. So in other words do not:

```css
/* BAD: */
.box {
  margin: 0px;
  padding: 0em;
  border: 1px solid black;
}
```

This might be a bit pedantic but the CSS spec allows for no units after `0` values as it's redundant. 
Leaving them out will save bytes and saving bytes is good.

# How do I fix this ?

Just remove all unit specifics after 0 such as `0px`, `0em` and `0%`.

```css
/* GOOD: */
.box {
  margin: 0;
  padding: 0;
  border: 1px solid black;
}
```

# Resources
* [CSSLint - Disallow units for zero value properties](https://github.com/CSSLint/csslint/wiki/Disallow-units-for-zero-values)
