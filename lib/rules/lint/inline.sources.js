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
  payload.getPageContent(function(err, page_content_str) {

    // check for errors, else stop
    if(err) return fn(err);

    // check if content was given
    if(S(page_content_str || '').isEmpty() == true)
      return fn(null);

    // load the cheerio context
    var $ = cheerio.load(page_content_str);

    // loop and get all the style tags
    $('style').each(function(i, elem) {

      // handle the text
      block_content_str = $(elem).html();

      // push the resource
      resources.push({

        source: 'inline',
        col: page_content_str.indexOf(block_content_str),
        content: block_content_str

      });

    });

    // done
    fn(null, resources);

  });

};