Specifying an element as part of a selector, while syntactically sound, adds unnecessary specificity to the selector in question. It stops the selector from being used on any element other than the type specified. This can be desired behaviour in some cases, but general avoidance of this will result in faster CSS processing, smaller stylesheets and a looser coupling between markup and styling.

```css
body.red-background { background-color: red; }
.something li.somewhere { color: blue; }
```

# How do I fix this ?

Remove all element names from ID and/or class selectors in your stylesheets.

# Resources?

* [csslint wiki](https://github.com/CSSLint/csslint/wiki/Disallow-overqualified-elements)
