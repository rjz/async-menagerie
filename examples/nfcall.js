var fs = require('fs'),
    Q = require('q');

var copyFileWithQ = module.exports = function (src, dst) {
  return Q.nfcall(fs.readFile, src).then(function (result) {
    return Q.nfcall(fs.writeFile, dst, result);
  });
};

