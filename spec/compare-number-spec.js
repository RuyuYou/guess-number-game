const CompareNumber = require('../src/compare-number');

describe('compare number', ()=> {
    const answers = '1234';
    it('should print 4A0B', ()=> {
        const inputs = '1234';
        const result = CompareNumber.compare(answers, inputs);
        const expectResult = '4A0B';
        expect(result).toEqual(expectResult);
    });

    it('should print 0A4B', ()=> {
        const inputs = '4321';
        const result = CompareNumber.compare(answers, inputs);
        const expectResult = '0A4B';
        expect(result).toEqual(expectResult);
    });


    it('should print 0A0B', ()=> {
        const inputs = '5678';
        const result = CompareNumber.compare(answers, inputs);
        const expectResult = '0A0B';
        expect(result).toEqual(expectResult);
    });

});