# Built-in Style

### Intro

Vant contains some common styles that can be used directly by the className.

### Text ellipsis

When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div class="van-ellipsis">
  This is a paragraph that displays up to one line of text, and the rest of the
  text will be omitted.
</div>

<div class="van-multi-ellipsis--l2">
  This is a paragraph that displays up to two lines of text, and the rest of the
  text will be omitted.
</div>

<div class="van-multi-ellipsis--l3">
  This is a paragraph that displays up to three lines of text, and the rest of
  the text will be omitted.
</div>
```

### Hairline

Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div class="van-hairline--top"></div>

<!-- border bottom -->
<div class="van-hairline--bottom"></div>

<!-- border left -->
<div class="van-hairline--left"></div>

<!-- border right -->
<div class="van-hairline--right"></div>

<!-- border top & bottom -->
<div class="van-hairline--top-bottom"></div>

<!-- full border -->
<div class="van-hairline--surround"></div>
```
