---
layout: docs-post
title: "Assets"
date: 2017-06-03 16:16:01 -0600
categories: [Core Concepts]
---
Assets are, for now, images. These images are stored in the local file system on the server. When you upload a new asset, it is saved to the `/public/assets/` folder of your server. There is a special static route to the public folder as a part of the Flint server, so when linking to an asset in a template you'll want to do something like:

```html
<img src="/public/assets/myimage.png" />
```

When you're dealing with an [AssetModel](/docs/assetmodel) object, you can format your URL like this:

{% raw %}
```html
{% set asset = entry.mySuperCoolAsset %}
<img src="/public/assets/{{ asset.filename }}" />
```
{% endraw %}

Future plans to improve assets includes adding more available file types and categorization (like sub-folders). If you want to help improve FlintCMS in this way, please [talk about it here]({{ site.github_repo }}/issues)!