---
layout: docs-post
title: "User Groups"
date: 2017-06-03 16:16:01 -0600
categories: [Core Concepts]
---
Unlike other content management systems, Flint comes with unlimited user groups for free. This means that as far as templating goes, there is only one type of user with potentially different user groups (which makes templating easy to plan for).

Every time the server is restarted, Flint checks to see if there is an Admin user group and, if necessary, creates one with all permissions enabled. Deleting the Admin user group is disabled on the dashboard, but in case someone does it by mistake directly through the database or some other horrible mistake happens, Flint has you covered.

## Permissions

Each User Group can have a different set of permissions. For the full list of permissions, check out the file in the [GitHub repository]({{ site.github_repo }}/blob/master/server/utils/permissions.json).
