var scrapper = require('./scraper');

exports.handler = function(event, context, callback) {
  if (event.url) {
    scrapper.scrape(event.url, function(err, result) {
      if (err) {
        return callback(null, {error: result});
      }
      callback(null, {result: result});
    })
  }
  else {
    callback(null, {error: 'bad query'});
  }
};
