var fs = require('fs');

var copyFile = module.exports = function (src, dst, callback) {

  var reader = fs.createReadStream(src),
      writer = fs.createWriteStream(dst);

  writer.on('close', callback);

  reader.pipe(writer);
};

