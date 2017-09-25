---
layout: docs-post
title:  "Creating a Plugin"
date:   2017-06-03 16:16:01 -0600
categories: [Plugins]
---
## Getting Started
A plugin package will look at the very least like this:

```
|_ index.js
|_ icon.png
|_ package.json
```

`index.js` is the entry point for your plugin. It should export an ES6 class that extends `FlintPlugin`, like so:

```js
const FlintPlugin = require('flintcms').FlintPlugin;

class MyPlugin extends FlintPlugin {}

module.exports = MyPlugin;
```

## Required Properties

There are a few static getters and methods that are required for your plugin to work. Some information is best taken directly from your `package.json` file to make your life easier, and to ensure that no two plugins are named the same way. Make your plugin file look something like this:

```js
const FlintPlugin = require('flintcms').FlintPlugin;
const path = require('path');
const pkg = require('./package.json');

class MyPlugin extends FlintPlugin {
  static get uid() { return pkg.name; }
  static get name() { return 'My Amazing Plugin!'; }
  static get version() { return pkg.version; }
  static get icon() { return path.join(__dirname, 'icon.png'); }

  init(schema, events) {
    // Start your plugin's code here!
  }
}

module.exports = MyPlugin;
```

Notice the `init()` method; this method is called right when the plugin is registered. This method is called against every model, so if you're trying to target one specific model you can do so with an if statement:

```js
init(schema) { 
  if (schema.name === 'Entry') {
    // Now you can write code specific to the
    // Entry model, like adding hooks
  }
}
```