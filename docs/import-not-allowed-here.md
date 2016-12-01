The CSS specification defines a syntax and grammar with which the language is written. Conformance to this syntax and grammar is needed for your code to be correctly interpreted. `@import` is used to pull in styles from external stylesheets.

```css
/* Invalid */
@import "subs.css";
@media print {
  @import "print-main.css";
  body { font-size: 10pt }
}

/* Valid */
@import "subs.css";
@import "print-main.css" print;
@media print {
  body { font-size: 10pt }
}
```

# How do I fix this ?

`@import` should precede all other types of rules except `@charset` rules. It should also not be used in conditional group at-rules.

# Resources

* [Syntax and basic data types](https://www.w3.org/TR/CSS21/syndata.html#at-rules)
* [Assigning property values, Cascading, and Inheritance](https://www.w3.org/TR/CSS21/cascade.html#at-import)
* [MDN @import](https://developer.mozilla.org/en/docs/Web/CSS/@import)
