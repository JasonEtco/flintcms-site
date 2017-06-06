---
layout: docs-post-model
title: "SiteModel"
date: 2017-06-03 16:16:01 -0600
categories: docs templating
section: Templating Reference
modelLink: server/models/SiteModel.js
typeLink: server/graphql/types/Site.js
primer: Any time you refer to the site object in a template, you're actually being provided with a SiteModel object.
---
## Site Properties

### `siteName`
The name of your website

### `siteUrl`
Your website's url. Note that this may not be reliable as it checks your configuration settings, not where the server is actually running.

### `style`
A string of CSS code that can be changed through the admin dashboard. Useful for small changes to templates that can be made without cloning/editing the codebase.
