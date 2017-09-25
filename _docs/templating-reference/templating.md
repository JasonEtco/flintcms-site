---
layout: docs-post
title: "Templating Guide"
date: 2017-06-03 16:16:01 -0600
categories: [Templating Reference]
---
## `this`

Each template gets a `this` object. If you're looking at an Entry, the `this` will be filled with that Entry's content. If you're on a Page, it'll have the Page's content. If you're ever confused, you can enable `debugMode` in your site's configuration which will log `this` to your browser's console.

{% raw %}
```liquid
<h1>{{ this.title }}</h1>
```
{% endraw %}

## The `flint` Object

Every template has access to the `flint` object. This is a big object containing a ton of information, like all of the sections, entries and users your website has. For example, if you wanted to loop through all of the sections and show each one's title:

{% raw %}
```liquid
<ul>
  {% for section in flint.sections %}
    <li>{{ section.title }}</li>
  {% endfor %}
</ul>
```
{% endraw %}

## Flint Object Properties

| Property Name | Description |
| :------------ | :---------- |
| `pages` | An array of [PageModels](/docs/pagemodel). |
| `sections` | An array of [SectionModels](/docs/sectionmodel). |
| `entries` | An array of [EntryModels](/docs/entrymodel). |
| `users` | An array of [UserModels](/docs/usermodel). |
| `fields` | An array of [FieldModels](/docs/fieldmodel). |
| `user groups` | An array of [UserGroupModels](/docs/usergroupmodel). |
| `assets` | An array of [AssetModels](/docs/assetmodel). |
| `site` | A [SiteModel](/docs/sitemodel) object. |