import chai from 'chai';
import 'mocha';
import compact from '../compact.js';
const assert = chai.assert;
const expect = chai.expect;


describe('compact', function(){
    it('Check if returned array has no falsey values.',function(){
        assert.equal(compact([1,2,null,4,"",6,7,8,NaN,undefined]).toString(), '1,2,4,6,7,8');
    });
    it('Check if array full of falsey values is empty after the removal.',function(){
        assert.equal(compact([null,NaN,undefined,"","",null]).toString(), '');
    });
    it('Check if function handles null arrays or empty arrays correctly.',function(){
        expect(()=>compact(null)).to.not.throw(Error);
    });
});

