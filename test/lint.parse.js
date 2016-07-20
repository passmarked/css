// modules
var assert      = require('assert')
var _           = require('underscore')
var fs          = require('fs');
var passmarked  = require('passmarked');
var Lint        = require('../lib/rules/lint/linting');

describe('lint', function(){

  describe('#parse', function(){

    it('Should return the important rule from global entries', function(done){

      // create a dummy payload
      var payload = passmarked.createPayload(
        {

          url: 'http://example.com'

        },
        require('../samples/lint.entry.json'),
        '');

      // handle the stream
      Lint.getSources(payload, function(err, entries){

        // check for a error
        if(err) assert.fail(err);

        // must be defined
        if(!entries)
          assert.fail('Returned entries was null or undefined');

        // check if we got any rules back ...
        if(entries.length != 1)
          assert.fail('Was expecting 1 entry to be returned, got ' + entries.length);

        // check the item
        Lint.parse(payload, entries, function(err) {

          // check for a error
          if(err) assert.fail(err);

          // get the rules
          var rules = payload.getRules();

          // check if we got any rules back
          if(rules.length == 0)
            assert.fail('No rules were given back, was expecting 1 but got ' + rules.length);

          // done
          done();

        });

      });

    });

  });

  describe('#parseEntry', function(){

    it('Should return the important rule', function(done){

      // create a dummy payload
      var payload = passmarked.createPayload(
        {

          url: 'http://example.com'
          
        },
        require('../samples/lint.entry.json'),
        '');

      // handle the stream
      Lint.getSources(payload, function(err, entries){

        // check for a error
        if(err) assert.fail(err);

        // must be defined
        if(!entries)
          assert.fail('Returned entries was null or undefined');

        // check if we got any rules back ...
        if(entries.length != 1)
          assert.fail('Was expecting 1 entry to be returned, got ' + entries.length);

        // get the entry
        var entry = entries[0];

        // check the item
        Lint.parseEntry(payload, entry, function(err) {

          // check for a error
          if(err) assert.fail(err);

          // get the rules
          var rules = payload.getRules();

          // check if we got any rules back
          if(rules.length == 0)
            assert.fail('No rules were given back, was expecting 1 but got ' + rules.length);

          // done
          done();

        });

      });

    });

  });

});
