const AnswerGenerator = require('../src/answer-generator');

describe('answerGenerator', ()=> {
    it('should answer generator', ()=> {
        const isUnique = (item, index, array)=> {
            return array.lastIndexOf(item) === index;
        }
        const answer = AnswerGenerator.generator();
        expect(answer.length).toEqual(4);
        expect(AnswerGenerator.generator()).not.toEqual(AnswerGenerator.generator());
        expect(answer.split('').every(isUnique)).toBeTruthy();
    });
});