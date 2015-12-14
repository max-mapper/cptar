var tar = require('tar-fs')
var pump = require('pump')

module.exports = function (src, dest, cb) {
  var pack = tar.pack(src)
  var unpack = tar.extract(dest)
  pump(pack, unpack, cb)
}
