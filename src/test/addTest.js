import chai from 'chai';
import 'mocha';
import add from '../add.js';
const assert = chai.assert;
const expect = chai.expect;


describe('add', function(){
    it('Check if two numbers given to the function add up to the real answer',function(){
        assert.equal(add(2,2), 4);
    });
});

describe('add', function(){
    it('Check if the function handles wrong parameters, or null values',function(){
        expect(()=>add(null,null)).to.not.throw(Error);
    });
});


describe('add', function(){
    it('Check the functionality by using limit values, like infinity or such big numbers',function(){
        assert.equal(add(1.797693134862315E+308,1.797693134862315E+308), Infinity);
    });
});

describe('add', function(){
    it('Check, if a response to a bad parameter crashes the program.',function(){
        expect(()=>add("OppositeOfGoodParameter","badParameter")).to.not.throw(Error);
    });
});