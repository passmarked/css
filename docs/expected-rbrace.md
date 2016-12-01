The CSS specification defines a syntax and grammar with which the language is written. Conformance to this syntax and grammar is needed for your code to be correctly interpreted. Braces are used to define the scope of a preceding selector. All selectors must have braces, and all opening braces must have a closing partner brace.

```css
.this .is .valid {}
.this .is .not .valid {
```

# How do I fix this ?

Ensure all your selectors have brace blocks that are opened after a selector and closed before a new selector (or the end of the file) is encountered.

# Resources

* [MDN: CSS syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax)
