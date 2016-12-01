One of the main rules of performance is to use as few bytes as possible to get the job done. Along those lines, URLs are best used just once inside of CSS. If you have more than one class that needs to use the same background image, then it's better to have one class that uses the URL and simply apply that class to the various elements where it is needed.

```css
/* BAD: url duplicated multiple times */
.heart-icon {
  background: url(sprite.png) -16px 0 no-repeat;
}
.task-icon {
  background: url(sprite.png) -32px 0 no-repeat;
}
```
```html
<i class="heart-icon"></i>
```

# How do I fix this ?

Define one class that has the URL and be sure to apply that class to the HTML elements where the other classes are used. For the previous example, we would then only change the `background-position` for each _icon_.

```css
.icons {
  background: url(sprite.png) no-repeat;
}

.heart-icon {
  background-position: -16px 0;
}

.task-icon {
  background-position: -32px 0;
}
```
```html
<i class="icons heart-icon"></i>
```

# Resources

* [CSSLint - Disallow duplicate background images](https://github.com/CSSLint/csslint/wiki/Disallow-duplicate-background-images)
