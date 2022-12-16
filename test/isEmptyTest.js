import chai from 'chai';
import 'mocha';
import isEmpty from '../src/isEmpty.js';
const assert = chai.assert;
const expect = chai.expect;


describe('isEmpty', function(){
    it('Check, if an empty object is correctly recognized as empty.',function(){
        assert.equal(isEmpty([]), true);
    });
});

describe('isEmpty', function(){
    it('Check, if a not-empty object is correctly recognized as not empty.',function(){
        assert.equal(isEmpty([1,2,3,4,5,6]), false);
    });
});

describe('isEmpty', function(){
    it('Check, if a response to a bad parameter crashes the program. (Wrong datatype)',function(){
        expect(()=>isEmpty(null)).to.not.throw(Error);
    });
});