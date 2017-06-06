---
layout: docs-post-model
title: "AssetModel"
date: 2017-06-03 16:16:01 -0600
categories: docs templating
section: Templating Reference
modelLink: server/models/AssetModel.js
typeLink: server/graphql/types/Assets.js
primer: Any time you refer to an asset in a template, you're actually being provided with an AssetModel object.
---

## Asset Properties

### `title`
The title of the asset.

### `extension`
The file extension of the asset.

### `filename`
The filename of the asset in the local file system.

### `dateCreated`
A UNIX timestamp of when the asset was created.

### `width`
The width, in pixels, of the asset.

### `height`
The height, in pixels, of the asset.

### `size`
The file size, in bytes, of the asset.

### `mimetype`
The mimetype of the asset.