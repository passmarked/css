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
var cssbeautify       = require('cssbeautify');
var request           = require('request');

/**
* Local object we can use
**/
var Lint = {

  knownProperties: [

    'fill',
    'stroke',
    'clip',
    'font-weight',
    'vertical-align',
    'text-size-adjust',
    'font-rendering'

  ]

};

/**
*
**/
Lint.parse = function(payload, entries, fn) {

  // handle the entries
  async.eachLimit(entries, 4, function(entry, cb) {

    // output the function
    Lint.parseEntry(payload, entry, cb);

  }, function(err) {

    // give back the error
    fn(err);

  });

};

/**
*
**/
Lint.parseEntry = require('./parse');

/**
* Gets all the sources from a page
**/
Lint.getSources = function(payload, fn) {

  // final resources
  var resources = [];

  // get the sources from the network
  async.parallel({

    network: function(cb) {

      Lint.getNetworkSources(payload, cb);

    },
    assets: function(cb) {

      Lint.getInlineSources(payload, cb);

    }

  }, function(err, results) {

    // return the error
    if(err)
      return fn(err);

    // list the resources
    for(var i = 0; i < (results.network || []).length; i++) {

      // add the resources
      resources.push(results.network[i]);

    }

    // list the resources
    for(var i = 0; i < (results.assets || []).length; i++) {

      // add the resources
      resources.push(results.assets[i]);

    }

    // return the callback with info
    fn(null, resources);

  });

};

/**
* Returns all css file source code from the HAR
**/
Lint.getNetworkSources = require('./asset.sources');

/**
* Returns inline style blocks from the page itself
**/
Lint.getInlineSources = require('./inline.sources');

/**
* Formats the passed CSS for display
**/
Lint.prettify = require('./prettify');

/**
* Expose the interface
**/
module.exports = exports = Lint;