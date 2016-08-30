An empty rule is a CSS selector without a body of properties and values. Including these will have no visual effect on the document being rendered. It will, however, add unnecessary weight to your stylesheet which can cause your site to load slower.

```css
.some .element { color: yellow; }
.some .other .element {}
.yet .another .element {
    /*color: red;*/
}
```

# How do I fix this ?

Simply remove any and all selectors without properties and values from your stylesheets to lessen the weight of your stylesheets.

# Resources

* [csslint wiki](https://github.com/CSSLint/csslint/wiki/Disallow-empty-rules)
