const answerGenerator = require('./answer-generator');
const compareNumber = require('./compare-number');

class Game {

    constructor() {
        this.answer = answerGenerator.generator();
        this.chance = 6;
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (inputs)=> {
            if (!this.validate(inputs)) {
                console.log('Cannot input double number');
                this.ask();
            } else if (inputs === this.answer) {
                console.log('congratulations\n');
            }
            else {
                console.log(compareNumber.compare(this.answer, inputs));
                this.chance--;
                if (this.isGameOver()) {
                    console.log('game over\n');
                    console.log(`answer:${this.answer}`);
                    process.exit();
                }
                else {
                    this.ask();
                }
            }
        });
    }

    start() {
        console.log('Welcome\n');
        this.ask();
    }

    ask() {
        console.log('Please inputs your number');
    }

    validate(inputs) {
        return inputs.split('').every((digit, index, array)=> {
            return array.lastIndexOf(digit) === index;
        });
    }

    isGameOver() {
        return this.chance === 0;
    }
}

module.exports = Game;