import chai from 'chai';
import 'mocha';
import every from '../every.js';
const assert = chai.assert;


describe('every', function(){
    it(' ',function(){
        assert.equal(every(2,2), 4);
    });

});