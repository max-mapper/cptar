# cptar

recursive file and folder copy using in memory tar streams

## usage

Pass in source and destination paths. All files/folders will be copied from source to destination.

The destination folder will be created if it does not exist.

```js
var cptar = require('cptar')

cptar('./source', './dest', function (err) {
  if (err) throw err
  // your data has been copied
})
```
