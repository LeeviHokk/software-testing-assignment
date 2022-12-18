import chai from 'chai';
import 'mocha';
import capitalize from '../capitalize.js';
const assert = chai.assert;
const expect = chai.expect;

describe('capitalize', function(){
    it('Test the function by giving different strings, which are lowercase, mixed, or uppercase.',function(){
        assert.equal(capitalize('EXamPLE'), 'Example');
    });
    it('Test the function by giving null values and see if it handles them correctly.',function(){
        expect(()=>capitalize(null)).to.not.throw(Error);
    });
    it('Test using very long strings.',function(){
        assert.equal(capitalize('Jo JOuTui ARmas AiKa'), 'Jo joutui armas aika');
    });
    it('Test using strings  which have special letters and numbers.',function(){
        assert.equal(capitalize('jA_SuV1_SuL01n3n!'), 'Ja_suv1_sul01n3n!');
    });
});
