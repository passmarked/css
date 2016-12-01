Defining styles for heading tags (h1, h2, h3, etc) in multiple places causes confusion and makes it hard to use. 
This rule ensures that you only have one definition per heading.

# How do I fix this ?

Make sure that you only have one definition per heading tag.

The following is wrong:

```css
h1 {
  color: black;
}

.hero h1 {
  font-weight: bold;
}
```

Using `h1.hover {}` does not cause any problems. Feel free.

# Resources

* [https://github.com/CSSLint/csslint/wiki/Headings-should-only-be-defined-once](https://github.com/CSSLint/csslint/wiki/Headings-should-only-be-defined-once)
