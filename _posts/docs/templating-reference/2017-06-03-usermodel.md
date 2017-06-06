---
layout: docs-post-model
title: "UserModel"
date: 2017-06-03 16:16:01 -0600
categories: docs templating
section: Templating Reference
modelLink: server/models/UserModel.js
typeLink: server/graphql/types/Users.js
primer: Any time you refer to a user in a template, you're actually being provided with a UserModel object.
---

## User Properties

UserModel objects have the following properties:

### `dateCreated`
A UNIX timestamp of the date the user was created.

### `email`
The user's email address.

### `name`
An object containing the user's first and last name.

#### `name.first`
The user's first name.

#### `name.last`
The user's last name.

### `_id`
The user's ID.

### `usergroup`
The user's usergroup. This is an object based on the [UserGroup model]({{ site.baseurl }}{% post_url docs/templating-reference/2017-06-03-usergroupmodel %}).

### `username`
The user's username.