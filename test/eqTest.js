import chai from 'chai';
import 'mocha';
import eq from '../src/eq.js';
const assert = chai.assert;

describe('eq', function(){
    it('expect to return true(NaN and NaN)',function(){
        assert.equal(eq(NaN,NaN), true);
    });

    it('expect to return false (2 and NaN)',function(){
        assert.equal(eq(2,NaN), false);
    });

    it('expect to return false ("word" and 123)',function(){
        assert.equal(eq("word",123), false);
    });

    it('expect to return true (3 and 3)',function(){
        assert.equal(eq(3,3), true);
    });

    it('expect to return true ("word" and "word")',function(){
        assert.equal(eq("word","word"), true);
    });

    it('expect to return true ("" and "")',function(){
        assert.equal(eq("",""), true);
    });

});