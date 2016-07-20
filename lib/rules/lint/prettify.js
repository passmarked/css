// required modules
var cssbeautify       = require('cssbeautify');
var S                 = require('string');

/**
* Formats the passed CSS for display
**/
module.exports = exports = function(content, fn) {

  // should not be undefined
  if(content === undefined)
    return fn(new Error('Content was undefined'));

  // should not be undefined
  if(content === null)
    return fn(new Error('Content was null'));

  try {

    // do the prettify
    beautified = cssbeautify(content || '', {

      indent: '  ',
      openbrace: 'separate-line',
      autosemicolon: true

    });

    // return the CSS
    fn(null, beautified)

  } catch(err) {

    // return the error
    fn(err);

  }

};