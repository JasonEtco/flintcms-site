---
layout: docs-post
title: "SCSS Compiling"
date: 2017-06-03 16:16:01 -0600
categories: [Getting Started]
---

In addition the other great features, FlintCMS also compiles your SCSS to CSS for you. The functionality is totally customizable:

```js
const Flint = require('flintcms');

const flintServer = new Flint({
  scssEntryPoint: 'main.scss', // The entry point from where you'll import your other SCSS files
  scssPath: 'scss', // The folder that stores your SCSS files
  scssIncludePaths: ['node_modules', 'scss'] // List of directories to enable `@import` from
});

flintServer.startServer();
```

`scssEntryPoint` can be set to `false`, which will disable the whole compiling system. It's default is `main.scss`, so if you structure your directories like the following diagram, you can just write your CSS no problem!

```
/
├── scss/
│   ├── main.scss
│   ├── variables.scss
│   └── mixins.scss
```

And your `main.scss` file could look something like this:

```scss
@import 'variables';
@import 'mixins';

// Start using your variables/mixins!
body { background-color: $my-color-variable; }

// Want to import an npm package's SCSS? Cool!
// As long as `node_modules` is in your `scssIncludePaths` setting, it just works.
@import 'bootstrap/scss/bootstrap.scss';
```