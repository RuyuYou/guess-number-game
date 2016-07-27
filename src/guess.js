const answerGenerator = require('./answer-generator');
const compareNumber = require('./compare-number');

class Guess {
    static guess(inputs) {
        const answer = answerGenerator.generator();
        return compareNumber.compare(answer, inputs);
    }
}

module.exports = Guess;
