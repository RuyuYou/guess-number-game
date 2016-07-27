const answerGenerator = require('../src/answer-generator');
const guess = require('../src/guess');

describe('guess', ()=> {
    it('should guess correct', ()=> {
        spyOn(answerGenerator,'generator').and.returnValue('1234');
        const result = guess.guess('1234');
        expect(result).toEqual('4A0B');
    });
});