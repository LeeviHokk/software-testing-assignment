import chai from 'chai';
import 'mocha';
import isObject from '../isObject.js';
const assert = chai.assert;


describe('isObject', function(){
    it('should return false (boolean value)',function(){
        assert.equal(isObject(true), false);
    });

    it('should return true (array)',function(){
        assert.equal(isObject([1,2,3]), true);
    });

    it('should return true (Error)',function(){
        assert.equal(isObject(new Error()), true);
    });

    it('should return false (integer)',function(){
        assert.equal(isObject(23), false);
    });

    it('should return false (double)',function(){
        assert.equal(isObject(23.23), false);
    });

    it('should return true (new String)',function(){
        assert.equal(isObject(new String("")), true);
    });
});