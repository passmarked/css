Using qualified headings compromises the predictability of your design. If someone else were to pick up your design and tried putting in a heading somewhere, **they would need to be aware of the context and placement of the element.**

```css
/* Qualified heading with unpredictable heading styling */
.foo h1 {
  font-size: 50px;
}
.bar h1 {
  font-size: 30px;
}
```

With headings defined unconditionally, a developer can use a heading anywhere confident of its presentation, regardless of its parents.

```css
/* Predictable (site wide) heading styling */
h1 {
  font-size: 40px;
}
```

# How do I fix this ?

Remove heading qualifiers and make heading styles consistent across your site.

# Resources

* [Don't qualify headings](http://code.tutsplus.com/articles/should-you-start-using-csslint--net-20895)
