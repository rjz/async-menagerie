var fs = require('fs');

var copyFile = module.exports = function (src, dst, callback) {
  fs.readFile(src, function (err, result) {
    if (err) {
      callback(err);
    }
    else {
      fs.writeFile(dst, result, callback);
    }
  });
};

