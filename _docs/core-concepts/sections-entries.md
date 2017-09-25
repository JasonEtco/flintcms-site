---
layout: docs-post
title: "Sections &amp; Entries"
date: 2017-06-03 16:16:01 -0600
categories: [Core Concepts]
---
## Sections
Sections are how Flint categorizes different entries. When adding a new section, you pick the fields that are available when creating a new entry in that section. You must also choose a template, relative to the `templatePath` in your site's configuration.

Sections are the best way to group entries of a similar type. For example, in a food blog you might have a section for general recipes, then a section for your own personal restaurant critiques. The important thing to note is that entries in each of those two sections will have vastly different content, and so they should be designed and handled differently. Of course, this is totally up to you; the point of sections is to give you choices but not lock you into any specific functionality.

### Creating a new Section

Creating a new Section is real easy; just head to your site's Settings from the side menu, click **Sections** and then the **New Section** button in the top right. As you write the title of the section, you'll see that the handle is created based on the title. That handle is how you'll find entries in that section within the template. You can learn more about how sections are handled in templates [here](/docs/sectionmodel).

## Entries

Entries are really the meat and potatoes of Flint. You can think of them as posts or articles, but they are effectively the individual documents that your website has. Entries are grouped within Sections to maintain the same styling and content expectations.

You can learn all about dealing with Entries in templates [here](/docs/entrymodel).

Entries can have one of three statuses: `Live`, `Draft` or `Disabled`. Live is fairly straightforward, but Draft and Disabled are separate to enable more specific user permissions.

Because entries are the main way that content is added to your site, there are specific permissions that deal with them. For example, there is a permission that enables/disables the ability to create or edit a live entry.

### Plans for Improvement

Create different types of sections, to be able to have different organizational features for the different types of content. For example, a general section to have different entries of the same level, and then a hierarchy-based section that can have nested entries (could be useful for documentation, wikis, etc.). If you have any inclination to talk about it, please [do so here!]({{ site.github_repo }}/issues)