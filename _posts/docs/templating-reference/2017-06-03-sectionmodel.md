---
layout: docs-post-model
title: "SectionModel"
date: 2017-06-03 16:16:01 -0600
categories: docs templating
section: Templating Reference
modelLink: server/models/SectionModel.js
typeLink: server/graphql/types/Sections.js
primer: Any time you refer to a section in a template, you're actually being provided with a SectionModel object.
---

## Section Properties

### `title`
The title of the section.

### `slug`
A slugified version of the title of the section.

### `handle`
A camelcase version of the title, useful for referencing the section in a template.

### `dateCreated`
A UNIX timestamp of the date the usergroup was created.

### `template`
The template that has been assigned to this section.

### `fields`
An array of field IDs that are available to the section. Note that this is the list of fields available, not the list of fields that an entry has filled.