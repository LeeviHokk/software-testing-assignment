import chai from 'chai';
import 'mocha';
import defaultTo from '../defaultTo.js';
const assert = chai.assert;

describe('defaultTo', function(){
    it('Checks `value` to determine whether a default value should be returned in its place.',function(){
        assert.equal(defaultTo(NaN, "default"), "default");
    });

    it('should return 4', function () {
        assert.equal(defaultTo(4, "default"), 4);
    });

    it('should return default', function () {
        assert.equal(defaultTo(null, "default"), "default");
    });

});