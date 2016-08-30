ID selectors are completely unique and therefore cannot be reused.

One of CSS's benefits is the ability to reuse style rules in multiple places. When you start out with an ID selector, **you're automatically limiting that style to a single element in your html.**

```css
#issue {
  color: #ff0000;
}
```
```html
<h4>Project Status:</h4>
<ul>
  <li>Launch went smoothly</li>
  <li>Orders are coming in</li>
  <li id="issue">Upstream suppliers low on stock</li>
  <!-- id can only be used once for valid html -->
</ul>
```

# How do I fix this ?

Eventually you will end up needing or wanting to reuse the style specified with the ID, and you'll end up defining a class for that purpose. By not using IDs from the start, you allow for the **maximum level of reusability** with your CSS.

```css
.issue {
  color: #ff0000;
}
```
```html
<h4>Project Status:</h4>
<ul>
  <li>Launch went smoothly</li>
  <li>Orders are coming in</li>
  <li class="issue">Upstream suppliers low on stock</li>
  <li class="issue">Postal deliveries are taking longer than expected</li>
  <!-- .issue can be used multiple times -->
</ul>
```

# Resources

* [CSSLint - Disallow IDs in selectors](https://github.com/CSSLint/csslint/wiki/Disallow-IDs-in-selectors)
