Some properties in a rule will be ignored due to the `display` of the element. This leads to misunderstandings around how a rule should work and increases file size unnecessarily.

# Examples

* `display: inline` shouldn't use `width`, `height`, `margin-top`, `margin-bottom` and `float`.
* `display: inline-block` shouldn't use `float`.
* `display: block` shouldn't use `vertical-align`.
* `display: table-*` shouldn't use `margin` or `float`.

# How do I fix this ?

Remove these ignored or problematic properties (as they should have very little or no effect on the display of the element), thereby decreasing file size and improving performance.

# Resources

* [CSSLint - Require properties appropriate for display](https://github.com/CSSLint/csslint/wiki/Require-properties-appropriate-for-display)
