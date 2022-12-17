import chai from 'chai';
import 'mocha';
import words from '../words.js';
const assert = chai.assert;
const expect = chai.expect;


describe('words', function(){
    it('Checks, if function returns a correctly parsed array, with legal parameters.',function(){
        assert.equal(words('Sean, Shawn, Shaun', /[^, ]+/g).toString(), 'Sean,Shawn,Shaun');
    });
});

describe('words', function(){
    it('Check, if a response to a bad parameter crashes the program. (Wrong datatype)',function(){
        expect(()=>words(null,null)).to.not.throw(Error);
    });
});

