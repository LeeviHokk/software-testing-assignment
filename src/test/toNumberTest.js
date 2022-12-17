import chai from 'chai';
import 'mocha';
import toNumber from '../toNumber.js';
const assert = chai.assert;


describe('toNumber', function(){
    it('expect to return 43',function(){
        assert.equal(toNumber("43"), 43);
    });

    it('expect to return NaN',function(){
        assert.equal(toNumber("sett"), NaN);
    });

});