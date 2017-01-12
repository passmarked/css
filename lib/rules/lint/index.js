// get the drivers
var Linting = require('./linting');

// expose the actual function
module.exports = exports = function(payload, fn) {

  // get our lint
  Linting.getSources(payload, function(err, resources) {

    // parse out our list
    Linting.parse(payload, resources || [], fn);

  });

};