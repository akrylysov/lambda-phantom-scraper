var path = require('path');
var childProcess = require('child_process');
var phantomJsPath = require('phantomjs-prebuilt').path;

exports.scrape = function(url, callback) {
  var childArgs = [path.join(__dirname, 'phantomjs-script.js')];
  var phantom = childProcess.execFile(phantomJsPath, childArgs, {
    env: {
      URL: url
    },
    maxBuffer: 2048*1024
  });

  var stdout = '';
  var stderr = '';

  phantom.stdout.on('data', function(data) {
    stdout += data;
  });

  phantom.stderr.on('data', function(data) {
    stderr += data;
  });

  phantom.on('uncaughtException', function(err) {
    console.log('uncaught exception: ' + err);
  });

  phantom.on('exit', function(exitCode) {
    if (exitCode !== 0) {
      return callback(true, stderr);
    }
    callback(null, stdout);
  });
};
