Older browsers (such as Internet Explorer 8 and earlier) do not understand CSS3 color values in `rgba()`, `hsl()`, or `hsla()`. Not having a fallback can leave these older browsers looking worse than expected:

```css
.box {
  background: #000;
  color: rgba(200, 200, 200, 0.8); /* BAD: No fallback */
}
```
_Semi transparent gray text on a black background in modern browsers, but black text on a black background for older ones. Reason: IE < 8 can't understand `rgba` and uses the default black text color_

# How do I fix this ?

Always include a fallback color in either `hexadecimal` or `rgb()` format, **before the new color** — for modern browsers to use the enhanced property instead.

```css
/* BAD: */
.box {
  background: #000;
  color: rgba(200, 200, 200, 0.8);
  color: #fff; /* Fallback after enhanced color */
}
```

```css
/* GOOD: */
.box {
  background: #000;
  color: #fff; /* Fallback before enhanced color */
  color: rgba(200, 200, 200, 0.8);
}
```

# Resources
* [CSSLint - Require fallback colors](https://github.com/CSSLint/csslint/wiki/Require-fallback-colors)
