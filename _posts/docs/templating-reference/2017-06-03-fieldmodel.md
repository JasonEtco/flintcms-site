---
layout: docs-post-model
title: "FieldModel"
date: 2017-06-03 16:16:01 -0600
categories: docs templating
section: Templating Reference
modelLink: server/models/FieldModel.js
typeLink: server/graphql/types/Fields.js
primer: Anytime you refer to a field in a template, you're actually being provided with a FieldModel object.
---

## Field Properties

### `title`
The title of the field.

### `slug`
A slugified version of the title of the field.

### `handle`
A camel case version of the title, useful for referencing the field in a template.

### `instructions`
The instructions given above the field in the admin dashboard.

### `type`
The type of field this is. Example: Dropdown, RichText.

### `required`
A boolean to represent whether or not the field is required in the admin dashboard.

### `options`
An object that contains the various options available to the specific type of field. See FieldTypes for more.

### `dateCreated`
A UNIX timestamp for when the field was created.