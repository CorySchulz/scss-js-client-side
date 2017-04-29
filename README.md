# scss-js-client-side
Lets you easily compile scss in the browser. 

Uses [Sass.js](https://github.com/medialize/sass.js/) to compile embedded or external scss.

```html
<scss src="scss/styles.scss"></scss>
```

```html
<scss>
$gold: #FFCC00;
body{
  background: $gold;
  header{
    padding: 20px;
    h1{
      color: #fff;
      text-align: center;
      padding: 20px;
    }
  }
}
</scss>
```

Include these two files:

```html
<script src="js/sass.sync.js"></script>
<script src="js/scss-js.js"></script>
```

All scss elements will be replaced with <style> elements after the code has run.

# Notes:

This is a tool that might be useful for a few very specific development situations, but it's not a good idea to run your site on this. It's much smarter to compile to css and use that on the live site.

It's also worth mentioning that this won't work in Chrome or Safari for local files because of CORS.

Only tested in Chrome and Safari because IE and FF are dead to me.





