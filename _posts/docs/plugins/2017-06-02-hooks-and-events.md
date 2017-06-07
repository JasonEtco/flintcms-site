---
layout: docs-post
title: "Hooks & Events"
date: 2017-06-03 16:16:01 -0600
categories: docs plugins
section: Plugins
---
Plugins have access to **Hooks** and **Events**, two separate ways of dealing with the data associated with the various actions and mutations that Flint employs.

## Events

An event is fired before and after each GraphQL mutation. Note that events are just a way of informing your plugin of when something has happened, not a way of affecting the data associated with the event. That's what hooks are for! You can listen for these events through the second argument of your plugin's `init` method:

```js
class MyPlugin extends FlintPlugin {
  // ...

  init(schema, events) {
    events.on('post-new-entry', (entry) => {
      console.log('This entry was just saved!', entry);
    });
  }
}
```

### Available Events

Here's a list of the events you can listen for, and the data that is passed:

#### Users

| Event Name | Description |
| :--------- | :---------- |
| `pre-new-user`| A [User Model]({% post_url 2017-06-03-usermodel %}) before it's saved to the database. |
| `post-new-user`| A [User Model]({% post_url 2017-06-03-usermodel %}) after it's been saved to the database. |
| `pre-updated-user`| An object containing the `_id` of the User being updated and the `data` being used to update it. |
| `post-updated-user`| A [User Model]({% post_url 2017-06-03-usermodel %}) after it's been updated in the database. |
| `pre-delete-user`| A [User Model]({% post_url 2017-06-03-usermodel %}) before it's been deleted from the database. |
| `post-delete-user`| A [User Model]({% post_url 2017-06-03-usermodel %}) after it's been deleted from the database. |

#### Entries

| Event Name | Description |
| :--------- | :---------- |
| `pre-new-entry`| An [Entry Model]({% post_url 2017-06-03-entrymodel %}) before it's saved to the database. |
| `post-new-entry`| An [Entry Model]({% post_url 2017-06-03-entrymodel %}) after it's been saved to the database. |
| `pre-updated-entry`| An object containing the `_id` of the Entry being updated and the `data` being used to update it. |
| `post-updated-entry`| An [Entry Model]({% post_url 2017-06-03-entrymodel %}) after it's been updated in the database. |
| `pre-delete-entry`| An [Entry Model]({% post_url 2017-06-03-entrymodel %}) before it's been deleted from the database. |
| `post-delete-entry`| An [Entry Model]({% post_url 2017-06-03-entrymodel %}) after it's been deleted from the database. |

#### Sections

| Event Name | Description |
| :--------- | :---------- |
| `pre-new-section`| A [Section Model]({% post_url 2017-06-03-sectionmodel %}) before it's saved to the database. |
| `post-new-section`| A [Section Model]({% post_url 2017-06-03-sectionmodel %}) after it's been saved to the database. |
| `pre-updated-section`| An object containing the `_id` of the Section being updated and the `data` being used to update it. |
| `post-updated-section`| A [Section Model]({% post_url 2017-06-03-sectionmodel %}) after it's been updated in the database. |
| `pre-delete-section`| A [Section Model]({% post_url 2017-06-03-sectionmodel %}) before it's been deleted from the database. |
| `post-delete-section`| A [Section Model]({% post_url 2017-06-03-sectionmodel %}) after it's been deleted from the database. |

#### Fields

| `pre-new-field`| A [Field Model]({% post_url 2017-06-03-fieldmodel %}) before it's saved to the database. |
| `post-new-field`| A [Field Model]({% post_url 2017-06-03-fieldmodel %}) after it's been saved to the database. |
| `pre-updated-field`| An object containing the `_id` of the Field being updated and the `data` being used to update it. |
| `post-updated-field`| A [Field Model]({% post_url 2017-06-03-fieldmodel %}) after it's been updated in the database. |
| `pre-delete-field`| A [Field Model]({% post_url 2017-06-03-fieldmodel %}) before it's been deleted from the database. |
| `post-delete-field`| A [Field Model]({% post_url 2017-06-03-fieldmodel %}) after it's been deleted from the database. |

#### UserGroups

| `pre-new-usergroup`| A [UserGroup Model]({% post_url 2017-06-03-usergroupmodel %}) before it's saved to the database. |
| `post-new-usergroup`| A [UserGroup Model]({% post_url 2017-06-03-usergroupmodel %}) after it's been saved to the database. |
| `pre-updated-usergroup`| An object containing the `_id` of the UserGroup being updated and the `data` being used to update it. |
| `post-updated-usergroup`| A [UserGroup Model]({% post_url 2017-06-03-usergroupmodel %}) after it's been updated in the database. |
| `pre-delete-usergroup`| A [UserGroup Model]({% post_url 2017-06-03-usergroupmodel %}) before it's been deleted from the database. |
| `post-delete-usergroup`| A [UserGroup Model]({% post_url 2017-06-03-usergroupmodel %}) after it's been deleted from the database. |

## Hooks

Different from events, **Hooks** are fired at specific times in a model's lifecycle and can affect the data before it is changed or saved in the database. For more information on hooks, you can check out the [Mongoose docs](http://mongoosejs.com/docs/middleware.html#pre).

### Adding a Hook

```js
class MyPlugin extends FlintPlugin {
  // ...

  init(schema, events) {
    if (schema.name === 'User') {
      schema.pre('validate', function (next) {
        if (this.name.first !== 'John') {
          next(new Error(`Your name is ${this.name.first}, but this website is only for people named John.`));
        } else {
          next();
        }
      });
    }
  }
}
```
