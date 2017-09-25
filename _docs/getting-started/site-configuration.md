---
layout: docs-post
title: "Site Configuration"
date: 2017-06-03 16:16:01 -0600
categories: [Getting Started]
---
There are a number of customization options available to you when you created your instance of the `Flint` class. You can pass an object of these options as the first parameter when creating the instance, like:

```js
const settings = {
  siteName: 'My Amazing Flint Site'
};

const myFlintServer = new Flint(settings);
```

> To enable `debugMode`, you can set the second argument to `true`.
{: .notif.notif--note }

## Available Settings

| Property         | Description | Default |
| :--------------- | :---------- | :------ |
| `siteName`       | The name of your website, as shown in the sidebar of the admin dashboard. |
| `siteUrl`        | The URL of your website. |
| `templatePath`   | Path to your templates directory, relative to your server's entry point. | `templates` |
| `publicPath`     | Path to your public directory, relative to your server's entry point. | `public` |
| `scssPath`       | Path to your scss directory, relative to your server's entry point. | `scss` |
| `scssEntryPoint` | The name of the file that imports all of your SCSS partials, within the `scssPath` directory. | `main.scss` |

Note that there are separate settings in your `.env` file; these are kept separate so that sensitive information can be stored in `.env` and not committed to version control, but general site configuration can be.
