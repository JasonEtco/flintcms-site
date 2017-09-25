---
layout: docs-post
title: "Cache Busting"
date: 2017-06-03 16:16:01 -0600
categories: [Advanced Usage]
---

Because FlintCMS [compiles your CSS for you](docs/2017-03-03-css-compiling), you may encounter problems with caching. If you update your styles frequently, it could be cache on the client and your users won't see those changes for a while, and that sucks.

## Enter cache busting!

You can enable cache busting in your Flint config object, which will generate a hash and name your compiled CSS bundle with the hash. It also stores the hash in the database's Site object so that you can access it in your templates.

```js
const flintServer = new Flint({
  enableCacheBusting: true,
});
```

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="{% raw %}main-{{ flint.site.cssHash }}.css{% endraw %}">
  <title>My dope Flint Site</title>
</head>
```