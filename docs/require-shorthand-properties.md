Sometimes when editing a rule you may end up defining multiple properties that can better be represented using shorthand. For example:

```css
.mybox {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 30px;
}
```

Using shorthand properties where possible helps to decrease the overall size of the CSS.

# How do I fix this ?

These four properties can actually be combined into a single `margin` property, such as:

```css
.mybox {
    margin: 20px 10px 30px;
}
```

Similarly, `padding-top`, `padding-right`, `padding-bottom` and `padding-left` can be combined to a single `padding` shorthand property.

# Resources

* [MDN - Shorthand Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)
* [CSSLint - Require Shorthand Properties](https://github.com/CSSLint/csslint/wiki/Require-shorthand-properties)
