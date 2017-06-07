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

### `sections`
An array of [Section Models]({% post_url 2017-06-03-sectionmodel %}).

### `entries`
An array of [Entry Models]({% post_url 2017-06-03-entrymodel %}).

### `users`
An array of [User Models]({% post_url 2017-06-03-usermodel %}).

### `fields`
An array of [Field Models]({% post_url 2017-06-03-fieldmodel %}).

### `usergroups`
An array of [UserGroup Models]({% post_url 2017-06-03-usergroupmodel %}).

### `assets`
An array of [Asset Models]({% post_url 2017-06-03-assetmodel %}).

### `site`
A [Site Model]({% post_url 2017-06-03-sitemodel %}) object.