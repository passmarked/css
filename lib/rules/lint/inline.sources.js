// required modules
var async             = require('async');
var url               = require('url');
var cheerio           = require('cheerio');
var fs                = require('fs');
var uuid              = require('node-uuid');
var child_process     = require('child_process');
var spawn             = require('child_process').spawn;
var S                 = require('string');
var _                 = require('underscore');
var crypto            = require('crypto');
var CSSLint           = require('csslint').CSSLint;
var cssbeautify       = require('cssbeautify');
var request           = require('request');

/**
* Returns inline style blocks from the page itself
**/
module.exports = exports =  function(payload, fn) {

  // the resources to return
  var resources = [];

  // get the data
  var data = payload.getData();

  // get the page content to start using it
  payload.getResponse(function(err, response) {

    // check for errors, else stop
    if(err) {

      // debug
      payload.error('inline.sources', 'Problem getting the error', err);

      // stop here
      return fn(err);

    }

    // check if content was given
    if(!response) {

      // debug
      payload.debug('inline.sources', 'Response was not given');

      // stop here
      return fn(null, []);

    }

    // get the content
    var content = null;

    // check if empty
    if(response.content && 
        response.content.text) {

      // set the content
      content = response.content.text;

    }

    // check if empty
    if(S(content || '').isEmpty() === true) {

      // debug
      payload.debug('inline.sources', 'Content is empty');

      // done
      return fn(null, []);

    }

    // load the cheerio context
    var $ = cheerio.load(content || '');

    // loop and get all the style tags
    $('style').each(function(i, elem) {

      // handle the text
      var body = $(elem).html();

      // push the resource
      resources.push({

        source:     'inline',
        col:        content.indexOf(body),
        content:    body || ''

      });

    });

    // done
    fn(null, resources);

  });

};