import chai from 'chai';
import 'mocha';
import every from '../every.js';
const assert = chai.assert;


describe('every', function(){


    it('expect true (boolean true array)',function(){
        assert.equal(every([true,true,true],Boolean), true);
    });

    it('expect true (empty array)',function(){
        assert.equal(every([],Boolean), true);
    });

    it('expect true (integer array and string)',function(){
        assert.equal(every([3,6,34,30,60],String), true);
    });

    it('expect false(mixed array and parseint)',function(){
        assert.equal(every([1,2,false,43,5],parseInt), false)
    });

    it('expect false(mixed array and parseint)',function(){
        assert.equal(every([1,2,false,43,5],parseInt), false)
    });

    
});