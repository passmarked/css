Having an outline is important for accessibility. Without this certain users will never know which elements has focus. 

Taking this away because of ill-conceived aesthetics is bad.

# How to Fix
Do not remove the outline, but if you really have to you could modify it.

```css
/* BAD */
a:focus {
  border: 1px solid red;
  outline: none;
}

/* GOOD */
a:focus {
  border: 1px solid red;
  outline: 2px solid red;
}
```

# Resources
* [https://github.com/CSSLint/csslint/wiki/Disallow-outline:none](https://github.com/CSSLint/csslint/wiki/Disallow-outline:none)
