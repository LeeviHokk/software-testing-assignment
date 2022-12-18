import chai from 'chai';
import 'mocha';
import toNumber from '../toNumber.js';
const assert = chai.assert;


describe('toNumber', function(){
    it('expect to return 43',function(){
        assert.equal(toNumber("43"), 43);
    });

    it('expect to return NaN',function(){
        assert.isNaN(toNumber("sett"), NaN);
    });

    it('should return 1',function(){
        assert.equal(toNumber(true),1)
    });

    it('should return 0',function(){
        assert.equal(toNumber(false),0)
    });

});