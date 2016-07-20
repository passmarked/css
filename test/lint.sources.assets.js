// modules
var assert      = require('assert')
var _           = require('underscore')
var fs          = require('fs');
var passmarked  = require('passmarked');
var pluginFunc  = require('../lib/rules/lint/asset.sources');

describe('lint', function(){

  describe('#getNetworkSources', function(){

    it('Should mark a entry as internal if on same domain', function(done){

      // create a dummy payload
      var payload = passmarked.createPayload(
        {
          url: 'http://example.com'
        },
        require('../samples/lint.sources.assets.internal.json'),
        '<p>test</p>');

      // handle the stream
      pluginFunc(payload, function(err, entries){

        // check for a error
        if(err) assert.fail(err);

        // must be defined
        if(!entries)
          assert.fail('Returned entries was null or undefined');

        // check if we got any rules back ...
        if(entries.length != 1)
          assert.fail('Was expecting 1 entries to be returned, got ' + entries.length);

        // loop all the results and must be asset
        for(var i = 0; i < entries.length; i++) {

          // check if asset
          if(entries[i].source != 'asset') {

            // fail
            assert.fail('Returned entry was not a "asset" type');

          }

          // check if asset
          if(entries[i].external === true) {

            // fail
            assert.fail('Returned entry should not be marked as external');

          }

        } 

        // done
        done();

      });

    });


    it('Should mark a entry as external if on another domain', function(done){

      // create a dummy payload
      var payload = passmarked.createPayload(
        {
          url: 'http://example2.com'
        },
        require('../samples/lint.sources.assets.external.json'),
        '<p>test</p>');

      // handle the stream
      pluginFunc(payload, function(err, entries){

        // check for a error
        if(err) assert.fail(err);

        // must be defined
        if(!entries)
          assert.fail('Returned entries was null or undefined');

        // check if we got any rules back ...
        if(entries.length != 1)
          assert.fail('Was expecting 1 entries to be returned, got ' + entries.length);

        // loop all the results and must be asset
        for(var i = 0; i < entries.length; i++) {

          // check if asset
          if(entries[i].source != 'asset') {

            // fail
            assert.fail('Returned entry was not a "asset" type');

          }

          // check if asset
          if(entries[i].external == false) {

            // fail
            assert.fail('Returned entry should be marked as external');

          }

        } 

        // done
        done();

      });

    });


    it('Should return 2 entries from our sample', function(done){

      // create a dummy payload
      var payload = passmarked.createPayload(
        {

          url: 'http://example.com'

        },
        require('../samples/lint.sources.assets.multiple.json'),
        '<p>test</p>');

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

        // loop all the results and must be asset
        for(var i = 0; i < entries.length; i++) {

          // check if asset
          if(entries[i].source != 'asset') {

            // fail
            assert.fail('Returned entry was not a "asset" type');

          }

        } 

        // done
        done();

      });

    });

  });

});