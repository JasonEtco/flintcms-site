---
layout: docs-post
title: "Heroku"
date: 2017-06-03 16:16:01 -0600
categories: [Deployment]
---
Deploying to Heroku is super easy; you can hook it up to your GitHub repository or use Heroku's CLI.

There are lots of guides on how to deploy a Node.js application to Heroku [on the internet](https://devcenter.heroku.com/articles/deploying-nodejs), so all you need to know about Flint is that now your `.env` environment variables will live in the settings tab of Heroku's dashboard.

You should make sure that you've set it to use the appropriate version of Node.js, which you can do in your `package.json` file.

```json
{
  "engines": {
    "node": "7.6.0",
    "npm": "5.0.0"
  }
}
```

> You're welcome to use a later version of Node.js than `7.6.0`, that's just the lowest compatible version.
{: .notif.notif--note}

## Procfile

You'll need to add a `Procfile` to the root of your project to tell Heroku what to do when starting the server. It should look something like this:

```
web: node index
```

But you can of course hook it up to an `npm` script or whatever you want. The world is your oyster! 