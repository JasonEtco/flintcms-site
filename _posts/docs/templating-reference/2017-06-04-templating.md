---
layout: docs-post
title: "Templating Guide"
date: 2017-06-03 16:16:01 -0600
categories: docs templating
section: Templating Reference
---
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

### `pages`
An array of [PageModels]({% post_url 2017-06-03-pagemodel %}).

### `sections`
An array of [SectionModels]({% post_url 2017-06-03-sectionmodel %}).

### `entries`
An array of [EntryModels]({% post_url 2017-06-03-entrymodel %}).

### `users`
An array of [UserModels]({% post_url 2017-06-03-usermodel %}).

### `fields`
An array of [FieldModels]({% post_url 2017-06-03-fieldmodel %}).

### `user groups`
An array of [UserGroupModels]({% post_url 2017-06-03-usergroupmodel %}).

### `assets`
An array of [AssetModels]({% post_url 2017-06-03-assetmodel %}).

### `site`
A [SiteModel]({% post_url 2017-06-03-sitemodel %}) object.