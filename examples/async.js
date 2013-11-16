var fs = require('fs'),
    async = require('async');

var copyFileWithAsync = module.exports = function (src, dst, callback) {
  async.waterfall([
    function (callback) {
      fs.readFile(src, callback)
    },
    function (result, callback) {
      fs.writeFile(dst, result, callback);
    }
  ], callback);
};

