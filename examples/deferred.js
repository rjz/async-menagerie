var fs = require('fs'),
    Q = require('q');

var copyFileWithDeferred = module.exports = function (src, dst) {
  var deferred = Q.defer();

  fs.readFile(src, function (err, result) {
    fs.writeFile(dst, result, function (err) {
      if (err) {
        deferred.reject(err);
      }
      else {
        deferred.resolve();
      }
    });
  });

  return deferred.promise;
};


