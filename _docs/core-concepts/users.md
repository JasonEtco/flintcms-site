---
layout: docs-post
title: "Users"
date: 2017-06-03 16:16:01 -0600
categories: [Core Concepts]
---
Unlike other content management systems, Flint comes with unlimited user groups for free. This means that as far as templating goes, there is only one type of user with potentially different user groups (which makes templating easy to plan for).

Every time the server is restarted, Flint checks to see if there is an Admin user group and, if necessary, creates one with all permissions enabled. Deleting the Admin user group is disabled on the dashboard, but in case someone does it by mistake directly through the database or some other horrible mistake happens, Flint has you covered.

## Public Registration

Some websites need for their users to be able to sign up for the site, rather than be given an account directly. In your website's Flint settings (under `Settings/Site Settings`) you can enable or disable the endpoints that allow for form or AJAX inputs.


## Account Confirmation

When a new user is created, your Flint server will send an email to the provided email address. This service uses the `nodemailer` package, and the relevant variables should be set in your environment variables.

```
MAIL_HOST=
MAIL_USER=
MAIL_PASS=
```