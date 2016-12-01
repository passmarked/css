Negative text indents are typically used to hide text off-screen for accessibility purposes. Often used as part of an image replacement technique, using a negative text indent ensures that screen readers will read the text even though it appears offscreen. Using `visibility: hidden` or `display: none` causes the text to be skipped by screen readers, so a negative text indent has been deemed as better for accessibility.

The technique usually involves a very large negative number such as `-999px` or `-9999px`, such as:

```css
.mybox {
    background: url(bg.png) no-repeat;
    text-indent: -9999px;
}
```

The intent of this technique is to allow the background image to show through for sighted users while screen readers receive the inline text instead.

Negative text indents are also problematic when used in a right-to-left language page, as the effect may cause a long horizontal scrollbar to appear. This problem can be fixed by adding `direction: ltr` to the rule, such as:

```css
.mybox {
    background: url(bg.png) no-repeat;
    direction: ltr;
    text-indent: -9999px;
}
```

# How do I fix this ?

Add `direction: ltr;` to the css rule:

```css
.mybox {
    background: url(bg.png) no-repeat;
    direction: ltr;
    text-indent: -9999px;
}
```

# Caveat

There are mixed opinions about whether or not negative text indents affect a page's search ranking. [Anecdotal accounts](http://luigimontanez.com/2010/stop-using-text-indent-css-trick/) seems to indicate Google treats negative text indents as a spam technique, but this has not been confirmed.

# Resources

* [CSSLint - Disallow negative text indent](https://github.com/CSSLint/csslint/wiki/Disallow-negative-text-indent)
* [Stop Using the text-indent: -9999px Trick](http://luigimontanez.com/2010/stop-using-text-indent-css-trick/)
