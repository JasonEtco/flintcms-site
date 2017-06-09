---
layout: docs-post-model
title: "PageModel"
date: 2017-06-03 16:16:01 -0600
categories: docs templating
section: Templating Reference
modelLink: server/models/PageModel.js
typeLink: server/graphql/types/Pages.js
primer: Anytime you refer to a page in a template, you're actually being provided with a PageModel object.
---

## Section Properties

### `title`
The title of the page.

### `slug`
A slugified version of the title of the page.

### `handle`
A camel case version of the title, useful for referencing the page in a template.

### `dateCreated`
A UNIX timestamp of the date the user group was created.

### `template`
The template that has been assigned to this page.

### `homepage`
A boolean that describes whether or not this page is the homepage.

### `route`
The route for this page. If it's the homepage, it will always be `'/'`.

### `fieldLayout`
An array of field IDs that are available to the page. Note that this is the list of fields available, not the list of fields that a page has filled.

### `fields`
An array of objects of the fields in the page.

#### `fields[].fieldId`
The _id of the field.

#### `fields[].handle`
The field's handle.

#### `fields[].value`
The value of the field for this page.