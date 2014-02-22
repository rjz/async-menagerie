var fs = require('fs'),
    _ = require('highland');

var copyFile = module.exports = function (src, dst, callback) {

  var reader = fs.createReadStream(src),
      writer = fs.createWriteStream(dst);

  writer.on('close', callback);

  _(reader).pipe(writer);
};

