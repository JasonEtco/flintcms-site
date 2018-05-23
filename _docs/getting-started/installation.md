---
layout: docs-post
title: "Installation"
date: 2017-06-03 16:16:01 -0600
categories: [Getting Started]
---
Installing and getting up and running with Flint couldn't be any easier. Assuming you have Node.js installed, you'll want to run:

```
npm install flintcms
```

## Entry Point

Every JavaScript app needs an entry point. You'll want to create a new JavaScript file, probably `index.js`, at the root of your project and fill it with something like this:

```js
const Flint = require('flintcms');

const flintServer = new Flint({
  siteName: 'My Amazing Flint Site!'
});

flintServer.startServer();
```

That's the basics right there! When you're ready, you can run the server by running `node index.js` in your terminal. By default your newly created site will be accessible from [https://localhost:4000](http://localhost:4000).

## .env

You will also need a separate `.env` file to store sensitive environment variables, like database connection details. **When your server starts, it will generate a .env file for you if you don't already have one.** Here is what it would look like:

```
# Secret settings
SESSION_SECRET= ...

# Debug settings
DEBUG= ...

# Mongo Credentials
DB_HOST= ...
DB_USER= ...
DB_PASS= ...

# Email Credentials
MAIL_HOST= ...
MAIL_USER= ...
MAIL_PASS= ...
```

For a Mongo database, mLab is suggested but by no means mandatory. As for emails, Flint uses the [Nodemailer](https://nodemailer.com/about/) package which supports various SMTP services. For SMTP, Mailgun has a free tier, and if you're having trouble setting it up feel free to [email me](mailto:hello@jasonet.co) and I can give you Flint-specific Mailgun credentials.

## Accessing Admin UI
Before you can access FlintCMS admin UI, you need to create a new admin user. Make sure to start the app via `node index.js` and head to http://localhost:4000/admin/install. Follow the setup instructions to create an new admin user.

Afterwards, you should be able to sign in to the admin panel by going to http://localhost:4000/admin and entering the credentials you previously created.

---

If you're having trouble with any of these steps, please [open up an issue]({{ site.github_repo }}/issues/new) detailing your experience.
