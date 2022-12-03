import chai from 'chai';
import 'mocha';
import add from '../src/add.js';
const assert = chai.assert;


describe('add', function(){
    it('Check if two numbers given to the function add up to the real answer',function(){
        assert.equal(add(2,2), 4);
    });

});