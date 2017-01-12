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

module.exports = exports = function(payload, entry, fn) {

  // load in the util function
  var Lint              = require('./linting');

  // sanity check
  if(S((entry || {}).content || '').isEmpty() === true) {

    // done
    return setImmediate(fn, null);

  }

  // check if we have these results cached already ?
  payload.getCachedResults({

    key:      'css:lint',
    content:  (entry || {}).content || '',

  }, function(err, cachedResults) {

    // did we gind
    if(cachedResults) {

      // check if there are any to add ?
      if((cachedResults || []).length > 0) {

        // loop and add these
        for(var i = 0; i < cachedResults.length; i++) {

          // add each as rule
          payload.addRule(cachedResults[i].meta, cachedResults[i].occurrence);

        }

      }

      // done
      return setImmediate(fn, null);

    } 

    // set to blank
    cachedResults = [];

    // prettify our css
    Lint.prettify(entry.content, function(err, formattedContent) {

      // check for a error
      if(err) return fn(err);

      // sanity check
      if(S(formattedContent || '').isEmpty() === true) return setImmediate(fn, null);

      // get all the rules that were found
      var result = CSSLint.verify( formattedContent, CSSLint.getRuleset());

      // get the lines
      var lines = formattedContent.split('\n');

      // loop through it
      for(var i = 0; i < (result.messages || []).length; i++) {

        // get the entries
        var lintEntry = result.messages[i];

        // get the evidence
        var evidence = (lintEntry.evidence || lintEntry.message || '');
        var parsedEvidence = S('' + evidence).trim().s.toLowerCase();

        // if allowed
        var allowed = true;

        // loop the index
        for(var a = 0; a < Lint.knownProperties.length; a++) {

          // check if this was the evidence
          if(parsedEvidence.indexOf( Lint.knownProperties[a] ) == 0) {

            // set to skip
            allowed = false;

            // skip
            break;

          }

        }

        // skip if not valid
        if(allowed === false) continue;

        // sanity check
        if(S(lintEntry.line || '').isEmpty() == true) continue;

        // set the line
        var currentLine = 1 * lintEntry.line;

        // check if we actually got a rule
        if(!lintEntry.rule) continue;

        // get the start and end lines
        var lineStart = payload.getSnippetManager().getStart(lines.length, currentLine - 1, 3);
        var lineEnd   = payload.getSnippetManager().getEnd(lines.length, currentLine - 1, 3);

        // slice and find the snippet
        var codeLines = payload.getSnippetManager().slice(lines, lineStart, lineEnd);

        // output
        var occurrence = {
          
          display:      'code',
          type:         lintEntry.type,

          message:      evidence,
          filename:     entry.url,
          identifiers:  [],

          code: {

            start:      lineStart,
            end:        lineEnd,
            subject:    (1 * currentLine)-1,
            text:       codeLines

          }

        };

        // check the column
        if(entry.col) occurrence.col = 1 * entry.col;

        // set the parsing message
        var parsingMessage = lintEntry.message;

        // check if the rule is defined
        if(lintEntry.rule && lintEntry.rule.name)
          parsingMessage = lintEntry.rule.name;

        // final message
        parsedMessage = parsingMessage
        .replace(/\sat\sline.*/gi, '')
        .replace(/\'/gi, "'")
        .replace(/\'(.*)\'/gi, '$');

        // remove the . at the end
        parsedMessage = S( parsedMessage ).chompRight('.').trim().s;

        // extract params
        var matches = parsedMessage.match(/\'(.*)\'/gi);

        // check for matches
        if(matches) {
          for(var a = 0; a < matches.length; a++) {

            // add our cleaned identifier
            occurrence.identifiers.push(matches[a].replace(/\'/gi, "").replace(/'\\\''/gi, ""))

          }
        }

        // extract params
        matches = parsedMessage.match(/\:\s+(.*)/gi);

        // check for matches
        if(matches) {
          for(var a = 0; a < matches.length; a++) {

            // done
            var identifier = matches[a].replace(/\'/gi, "").replace(/'\\\''/gi, "");
            identifier = S(identifier || '').chompLeft(': ').s;
            occurrence.identifiers.push( identifier );

            // replace placeholders
            parsedMessage = parsedMessage.replace(identifier, '$');

          }
        }

        // add to cached
        cachedResults.push({

          meta: {

            type: lintEntry.type,
            message: parsedMessage,
            key: S(parsedMessage).slugify().s

          },
          occurrence:  occurrence

        })

        // add my rule
        payload.addRule({

            type: lintEntry.type,
            message: parsedMessage,
            key: S(parsedMessage).slugify().s

          }, occurrence)

      }

      // save in cache
      payload.setCachedResults({

        key:      'css:lint',
        content:  (entry || {}).content || '',
        body:     cachedResults

      }, function() {

        // done
        setImmediate(fn, null);

      });

    });

  });

};