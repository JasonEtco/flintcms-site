---
layout: docs-post
title: "Pages"
date: 2017-06-03 16:16:01 -0600
categories: [Core Concepts]
---
Pages are a bit of a combination between Sections and Entries. Each page has it's own field layout (like a Section) but can store values in those fields (like an Entry). You can use Pages to have one-off pieces of content, like your website's homepage or a special announcement page.

## Homepage

When creating a new Page (or editing an existing one) you can decide that your Page will be your website's homepage. That means that going to `www.yourwebsite.com` will always go to that Page. Doing this means that you cannot create a dynamic route, since the route will always be your website's root URL.

## Routing

Pages also have access to dynamic routing; you can decide what you want the path to your Page to look like. In the admin dashboard, you can go to `settings/pages/new` to create a new Page. You have two options in terms of routes:

* You can decide that your page is the "Homepage," so the route is defined for you. In the database it's stored as `'/'`.
* You can write your own route. It should look something like `/a-really-great-route`. Whenever someone goes to that URL, they'll see your Page!

There are two areas where you can view and edit Pages, but in two separate ways. In admin dashboard settings, you can delete, add or create a new Page. From the side navigation menu, you can edit Pages. This separation is to enable a clearer difference between user permissions; some users may not be allowed to create new Pages, and so they should not be able to see the settings panel but can still edit those Pages from the side menu item.