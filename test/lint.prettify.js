// modules
var assert      = require('assert')
var _           = require('underscore')
var fs          = require('fs');
var S           = require('string');
var passmarked  = require('passmarked');
var pluginFunc  = require('../lib/rules/lint/prettify');

describe('lint', function(){

    describe('#prettify', function(){

      // handle the settings
      it('Should return a error if the message passed was undefined', function(done){

        // handle the stream
        pluginFunc(undefined, function(err, content){

          // check for a error
          if(!err) assert.fail('Was expecting a error for the undefined content');

          // done
          done();

        });

      });

      // handle the settings
      it('Should return a error if the message passed was null', function(done){

        // handle the stream
        pluginFunc(null, function(err, content){

          // check for a error
          if(!err) assert.fail('Was expecting a error for the null content');

          // done
          done();

        });

      });

      // handle the settings
      it('Should return a pretified version from our passed in CSS', function(done){

        // handle the stream
        pluginFunc('.text{color:black;}', function(err, content){

          // check for a error
          if(err) assert.fail(err);

          // check if not empty
          if(S(content).isEmpty() == true)
            assert.fail('Prettified content was blank')

          // should match a cleaned version
          if(content != `.text
{
  color: black;
}`) 
            assert.fail('Did not clean the content correctly.');

          // done
          done();

        });

      });

  });

});
