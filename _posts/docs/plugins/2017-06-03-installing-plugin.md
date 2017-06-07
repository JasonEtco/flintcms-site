---
layout: docs-post
title:  "Installing a Plugin"
date:   2017-06-03 16:16:01 -0600
categories: docs plugins
section: Plugins
---
Flint's plugins are based on packages on the NPM registry. To install one:

```bash
npm install PLUGIN_NAME
```

Then, once the plugin has been added to your project, you can include it in your site's configuration object. In your project's entry point:

```js
const PLUGIN = require('PLUGIN');

const siteSettings = {
  plugins: [ PLUGIN ],
};

const flintServer = new Flint(siteSettings);
```
