// modules
var assert      = require('assert')
var _           = require('underscore')
var fs          = require('fs');
var passmarked  = require('passmarked');
var Lint        = require('../lib/rules/lint/linting');

describe('lint', function(){

  describe('#getSources', function(){

    it('Should return one "inline" and "asset" entry', function(done){

      // create a dummy payload
      var payload = passmarked.createPayload(
        {

          url: 'http://example.com'
          
        },
        require('../samples/lint.sources.json'),
        fs.readFileSync('./samples/lint.sources.html').toString());

      // handle the stream
      Lint.getSources(payload, function(err, entries){

        // check for a error
        if(err) assert.fail(err);

        // must be defined
        if(!entries)
          assert.fail('Returned entries was null or undefined');

        // check if we got any rules back ...
        if(entries.length != 3)
          assert.fail('Was expecting 2 entries to be returned, got ' + entries.length);

        // the counters for the types
        var counters = {};

        // loop all the results and must be inline
        for(var i = 0; i < entries.length; i++) {

          // add the source
          if(!counters[ entries[i].source ])
            counters[ entries[i].source ] = 0;

          // addin the type
          counters[ entries[i].source ] += 1;

        }

        // check the counters
        if((counters['inline'] || 0) != 2)
          assert.fail('Expected 2 inline scripts, got ' + (counters['inline'] || 0))

        // check the counters
        if((counters['asset'] || 0) != 1)
          assert.fail('Expected 1 asset scripts, got ' + (counters['asset'] || 0))

        // done
        done();

      });

    });

  });

});
