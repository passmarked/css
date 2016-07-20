// modules
var assert      = require('assert')
var _           = require('underscore')
var fs          = require('fs');
var passmarked  = require('passmarked');
var pluginFunc  = require('../lib/rules/lint/inline.sources');

describe('lint', function(){

  describe('#getInlineSources', function(){

    it('Should return 2 entries from our sample', function(done){

      // create a dummy payload
      var payload = passmarked.createPayload(
        {

          url: 'http://example.com'
          
        },
        {},
        fs.readFileSync('./samples/lint.sources.inline.multiple.html').toString());

      // handle the stream
      pluginFunc(payload, function(err, entries){

        // check for a error
        if(err) assert.fail(err);

        // must be defined
        if(!entries)
          assert.fail('Returned entries was null or undefined');

        // check if we got any rules back ...
        if(entries.length != 2)
          assert.fail('Was expecting 2 entries to be returned, got ' + entries.length);

        // loop all the results and must be inline
        for(var i = 0; i < entries.length; i++) {

          // check if inline
          if(entries[i].source != 'inline') {

            // fail
            assert.fail('Returned entry was not a "inline" type');

          }

        } 

        // done
        done();

      });

    });

    it('Should return entry even if there is no type="text/css" attribute', function(done){

      // create a dummy payload
      var payload = passmarked.createPayload(
        {

          url: 'http://example.com'

        },
        {},
        fs.readFileSync('./samples/lint.sources.inline.type.html').toString());

      // handle the stream
      pluginFunc(payload, function(err, entries){

        // check for a error
        if(err) assert.fail(err);

        // must be defined
        if(!entries)
          assert.fail('Returned entries was null or undefined');

        // check if we got any rules back ...
        if(entries.length != 1)
          assert.fail('Was expecting 1 entry to be returned, got ' + entries.length);

        // loop all the results and must be inline
        for(var i = 0; i < entries.length; i++) {

          // check if inline
          if(entries[i].source != 'inline') {

            // fail
            assert.fail('Returned entry was not a "inline" type');

          }

        } 

        // done
        done();

      });

    });

    it('Should return no entries if the content does not have <style> tags', function(done){

      // create a dummy payload
      var payload = passmarked.createPayload(
        {

          url: 'http://example.com'

        },
        {},
        fs.readFileSync('./samples/lint.sources.inline.none.html').toString());

      // handle the stream
      pluginFunc(payload, function(err, entries){

        // check for a error
        if(err) assert.fail(err);

        // must be defined
        if(!entries)
          assert.fail('Returned entries was null or undefined');

        // check if we got any rules back ...
        if(entries.length != 0)
          assert.fail('Was expecting 0 entries to be returned, got ' + entries.length);

        // done
        done();

      });

    });

    it('Should return one entry from our test case that is "inline"', function(done){

      // create a dummy payload
      var payload = passmarked.createPayload(
        {

          url: 'http://example.com'
            
        },
        {},
        fs.readFileSync('./samples/lint.sources.inline.html').toString());

      // handle the stream
      pluginFunc(payload, function(err, entries){

        // check for a error
        if(err) assert.fail(err);

        // must be defined
        if(!entries)
          assert.fail('Returned entries was null or undefined');

        // check if we got any rules back ...
        if(entries.length != 1)
          assert.fail('Was expecting 1 entry to be returned, got ' + entries.length);

        // loop all the results and must be inline
        for(var i = 0; i < entries.length; i++) {

          // check if inline
          if(entries[i].source != 'inline') {

            // fail
            assert.fail('Returned entry was not a "inline" type');

          }

        } 

        // done
        done();

      });

    });

  });

});
