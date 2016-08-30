The universal selector (`*`) matches all elements. Though convenient for selecting a group of elements at a time, the universal selector **causes performance issues** when used as the key part (far-right) of a selector. For example, this type of rule should be avoided:

```css
/* BAD */
.mybox * {
    background: #fff;
    color: #000;
    background: rgba(255, 255, 255, 0.5);
}
```

```css
/* GOOD */
.mybox {
    background: #fff;
    color: #000;
    background: rgba(255, 255, 255, 0.5);
}
.mybox p {
    color: inherit;
}
```

**Browsers evaluate selectors from right-to-left**, so this rule begins by first matching every element in the document. After that, each of those elements must be inspected to see if it matches the next criteria, which is having an ancestor with the class of `mybox`. The more complex the selector containing `*`, the slower the evaluation becomes. For this reason, it's recommended to avoid using the universal selector as the _key part_ of a selector.  

# How do I fix this ?

Do not use the universal selector (at the far right of a CSS rule, at least). Instead write more specific rules for sub-elements.

# Resources

* [CSSLint - Disallow universal selector](https://github.com/CSSLint/csslint/wiki/Disallow-universal-selector)
