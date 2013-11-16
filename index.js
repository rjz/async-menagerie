var src = __dirname + '/examples/copy_file.js',
    dst = __dirname + '/_copied_file.js';

function copyWithPromise (key) {
  var func = require('./examples/' + key);
  func(src, dst)
    .then(function (result) {
      console.log('copied using', key);
    }, function (err) {
      console.error('err', err);
    });
}

function copyWithContinuation (key) {
  var func = require('./examples/' + key);
  func(src, dst, function (err) {
    if (err) {
      console.error('err', err);
    }
    else {
      console.log('copied using', key);
    }
  });
}

[
  'async',
  'async_and_partial',
  'copy_file'
].forEach(copyWithContinuation);

[
  'deferred',
  'deferred_and_async',
  'nfcall'
].forEach(copyWithPromise);

