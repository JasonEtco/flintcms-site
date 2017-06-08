---
layout: docs-post-model
title: "EntryModel"
date: 2017-06-03 16:16:01 -0600
categories: docs templating
section: Templating Reference
modelLink: server/models/EntryModel.js
typeLink: server/graphql/types/Entries.js
primer: Anytime you refer to an entry in a template, you're actually being provided with an EntryModel object.
---

## Entry Properties

### `title`
The title of the entry.

### `slug`
A slugified version of the title of the entry.

### `url`
The URL to the entry. This is currently `:sectionSlug/:entrySlug`.

### `dateCreated`
A UNIX timestamp for when the field was created.

### `status`
The status of the entry, either 'Live', 'Draft' or 'Disabled'.

### `author`
The user who created the entry. This is an instance of the [UserModel]({% post_url 2017-06-03-usermodel %}).

### `dateCreated`
A UNIX timestamp of when the entry was created.

### `fields`
An array of objects of the fields in the entry.

#### `fields[].fieldId`
The _id of the field.

#### `fields[].handle`
The field's handle.

#### `fields[].value`
The value of the field for this entry.

> If you know the handle of a field, you can get the value in the entry by using `entry.FIELDHANDLE`.
{: .notif .notif--note}