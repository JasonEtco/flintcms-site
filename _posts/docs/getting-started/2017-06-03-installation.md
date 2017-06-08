---
layout: docs-post
title: "Installation"
date: 2017-06-03 16:16:01 -0600
categories: docs
section: Getting Started
---
Installing and getting up and running with Flint couldn't be any easier. Assuming you have Node.js installed, you'll want to run:

```
npm install flintcms
```

## Entry Point

Every JavaScript app needs an entry point. You'll want to create a new JavaScript file, probably `index.js`, at the root of your project and fill it with something like this:

```js
const Flint = require('flintcms').Flint;

const flintServer = new Flint({
  siteName: 'My Amazing Flint Site!'
});

flintServer.startServer();
```

That's the basics right there! When you're ready, you can run the server by running `node index.js` in your terminal.

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

For a Mongo database, mLab is suggested but by no means mandatory. As for emails, Flint uses the [Nodemailer](https://nodemailer.com/about/) package which supports various SMTP services. Flint's recommendation is Mailgun, and if you're having trouble setting it up, feel free to [email me](hello@jasonet.co) and I can give you Flint-specific Mailgun credentials.

If you're having trouble with any of these steps, please [open up an issue]({{ site.github_repo }}/issues) detailing your experience.
