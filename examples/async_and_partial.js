var fs = require('fs'),
    async = require('async'),
    _ = require('lodash');

var copyFileWithAsync = module.exports = function (src, dst, callback) {
  async.waterfall([
    _.partial(fs.readFile, src),
    _.partial(fs.writeFile, dst)
  ], callback);
};

