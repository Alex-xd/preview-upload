## preview.js

[![npm](https://img.shields.io/badge/npm-1.0.2-blue.svg)](https://www.npmjs.com/package/upload-preview)
[![lisence](https://img.shields.io/badge/LISENCE-MIT-green.svg)](https://github.com/Alex-xd/preview-upload)

> A light and easy use plugin for showing a preview before you upload image.




## Usage

**1. Install preview.js**

`npm install upload-preview` and test it use `npm test` if you want.

or

simply include `<script src="preview.js"></script>`

**2. Use it**

```javascript
preview.listen('#uploader');
```

for example

```html
<input id="uploader" type="file">
<div id="preview"></div>

<script src="preview.js"></script>
<script>
preview.config({ prvBox:'preview' })
	       .listen('#uploader');
</script>
```

**Ps: You can put preview box any where just give it a class or id.**

![show](http://o6x2vif88.bkt.clouddn.com/preview-uploader.png)

## More configurations

You can use `config()` to customalize your preview box.

```html
<script>
preview.config({
    prvBox: 'preview',
    width: 200,
    height: 200,
    isAbsPosition: true
}).listen('#uploader');
</script>
```

Attribute `isAbsPostion`  means whether to use absolute positioning(set it 'true' to have higher a performance but make the preview box to be a absolute position box).

welcome pr to improve this project & enjoy it.

## LISENCE
MIT