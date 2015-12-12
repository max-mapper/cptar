var tar = require('tar-fs')
var mkdirp = require('mkdirp')
var pump = require('pump')

module.exports = function (src, dest, cb) {
  mkdirp(dest, function (err) {
    if (err) return cb(err)
    var pack = tar.pack(src)
    var unpack = tar.extract(dest)
    pump(pack, unpack, cb)
  })
}
