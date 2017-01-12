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
* Returns all css file source code from the HAR
**/
module.exports = exports = function(payload, fn) {

  // get the data
  var data = payload.getData();

  // get the page content to start using it
  payload.getHAR(function(err, HAR) {

    // check for errors, else stop
    if(err) return fn(err);

    // check if content was given
    if(!HAR) return fn(null);

    // sanity checks
    if(!HAR.log) return fn(null);
    if(!HAR.log.entries) return fn(null);

    // list of resources
    var resources = [];

    // return the rule
    for(var i = 0; i < (HAR.log.entries || []).length; i++) {

      // sanity check
      if(!HAR.log.entries[i].request) continue;
      if(!HAR.log.entries[i].response) continue;

      // loop all the headers and find the 
      var contentTypeHeader = _.find(HAR.log.entries[i].response.headers || [], function(header){

        return header.name.toLowerCase() == 'content-type';

      });

      // local reference
      var entry = HAR.log.entries[i];

      // get the details we want to use
      var url_str = entry.request.url;

      // parse it
      var url_obj = url.parse(url_str);
      var report_url_obj = url.parse(data.url);

      // sanity check
      if(!contentTypeHeader) continue;

      // add if text/css
      if(contentTypeHeader.value.toLowerCase().indexOf('text/css') !== -1) {

        // add the asset
        resources.push({

          url:        url_str,
          source:     'asset',
          external:   url_str.toLowerCase().indexOf(report_url_obj.hostname) == -1,
          content:    entry.response.content.text || ''

        });

      }

    }

    // done
    fn(null, resources);

  });

};