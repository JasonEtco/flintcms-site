---
layout: docs-post-model
title: "UserGroupModel"
date: 2017-06-03 16:16:01 -0600
categories: docs templating
section: Templating Reference
modelLink: server/models/User GroupModel.js
typeLink: server/graphql/types/User Groups.js
primer: Anytime you refer to an user group in a template, you're actually being provided with a User GroupModel object.
---

## User Group Properties

### `title`
The title of the user group.

### `slug`
A slugified version of the title of the user group.

### `dateCreated`
A UNIX timestamp of the date the user group was created.

### `permissions`
An object of booleans that looks like this:

```json
{
  "users": {
    "canAddUsers": true
  },
  "entries": {
    "canAddEntries": false
  }
}
```

For a full list of permissions, check out the [main JSON file]({{ site.github_repo }}/blob/master/server/utils/permissions.json). Keep in mind that the actual object in the user group model available to templates is a reduced version that looks like the above snippet (simple key/value pairs, not arrays of objects).