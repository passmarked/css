The _star hack_ is a famous (or perhaps infamous) technique for applying CSS properties only to Internet Explorer prior to version 7. By placing an asterisk immediately before the property name, older versions of Internet Explorer treated it as if the asterisk isn't there while other browsers simply ignore it.

```css
.mybox {
  border: 1px solid black;
  padding: 5px;
  width: 100px;
  *width: 200px; /* BAD */
}
```

# How do I fix this ?

Assuming you're operating in strict mode, use **child selectors** instead of the _star hack_. First, write rules that would initially be applied to all browsers. **When needed**, add IE-specific properties to these rules (instead of properties targeting standards-compliant browsers):

```css
/* GOOD: */
.mybox {
  border: 1px solid black;
  padding: 5px;
  width: 200px; /* IE < 7 specific style */
}

html > .mybox {
  width: 100px; /* Style override for standard browsers */
}
```

# Why this works

Older versions of Internet Explorer don't understand child selectors, so the style override (targetting modern browsers) gets ignored.

# Resources

* [CSSLint - Disallow Star Hack](https://github.com/CSSLint/csslint/wiki/disallow-star-hack)
* [Wikipedia - Star Hack](http://en.wikipedia.org/wiki/CSS_filter#Star_hack)
