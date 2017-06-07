---
layout: docs-post
title: "Setting up the Directory"
date: 2017-06-03 16:16:01 -0600
categories: docs
section: Getting Started
---
Now that Flint is installed and ready to go, you'll want to design and build your templates. Flint works within four main directories:

```
|_ templates
|_ scss
|_ plugins
|_ public
```

The actual paths for these directories can be configured in Flint's main configuration object, but the defaults are above. So, a typical folder structure would look like this:

```
|_ templates
|_ scss
|_ plugins
|_ public
  |_assets
|_ node_modules
|_ index.js
|_ .env
```

## Writing your first Template

The first template you'll want to make is probably an `index.njk` file, to represent your site's homepage. To see a fully fledged example of a series of templates, check out our [demo project](https://github.com/flintcms). Keep in mind that every section needs a template and you can reuse the same template for multiple sections. 

> Note: Putting the `DEBUG=true` variable in your `.env` file will print all of the data available to your templates into the browser's console.
{: .notif .notif--note}
