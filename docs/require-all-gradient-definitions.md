It's easy to forget one or more gradient definitions with all of the various vendor prefix gradients available.

```css
/* Missing -moz, -ms, and -o */
.mygradient-a
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1e5799), color-stop(100%,#7db9e8));
  background: -webkit-linear-gradient(top,  #1e5799 0%,#7db9e8 100%);
}

/* Missing old and new -webkit */
.mygradient-b {
  background: -moz-linear-gradient(top,  #1e5799 0%, #7db9e8 100%); 
  background: -o-linear-gradient(top,  #1e5799 0%,#7db9e8 100%);
  background: -ms-linear-gradient(top,  #1e5799 0%,#7db9e8 100%);
}
```

# How do I fix this ?

Make sure to include all gradient versions (or use a css preprocessor or online gradient generator).

```css
.mygradient-c {
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1e5799), color-stop(100%,#7db9e8));
  background: -webkit-linear-gradient(top,  #1e5799 0%,#7db9e8 100%);
  background: -moz-linear-gradient(top,  #1e5799 0%, #7db9e8 100%);
  background: -ms-linear-gradient(top,  #1e5799 0%,#7db9e8 100%); 
  background: -o-linear-gradient(top,  #1e5799 0%,#7db9e8 100%);
}
```

# Resources

* [CSSLint - Require all gradient modifications](https://github.com/CSSLint/csslint/wiki/Require-all-gradient-definitions)
* [Sass gradient mixin](http://www.sitepoint.com/5-useful-sass-mixins-bootstrap/#mixin-gradient)
* [Colorzilla - Gradient Editor](http://www.colorzilla.com/gradient-editor/)
