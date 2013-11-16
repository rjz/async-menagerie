var fs = require('fs'),
    _ = require('lodash'),
    async = require('async'),
    Q = require('q');

var copyFileWithDeferredAndAsync = module.exports = function (src, dst) {
  var deferred = Q.defer();

  async.waterfall([
    _.partial(fs.readFile, src),
    _.partial(fs.writeFile, dst)
  ], function (err) {
    if (err) {
      deferred.reject(err);
    }
    else {
      deferred.resolve();
    }
  });

  return deferred.promise;
};

