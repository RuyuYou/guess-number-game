
class compareNumber{

    static compare(answers,inputs) {
        const answerArray = answers.split('');
        const inputArray = inputs.split('');
        let a=0;
        let b=0;
        answerArray.map((answer)=>{
            const input = inputArray.find(input=>input === answer);
            if (input) {
                const inputPosition = inputArray.indexOf(input);
                const answerPosition = answerArray.indexOf(answer);
                inputPosition ===answerPosition ?a++:b++;
            }
        });
        return `${a}A${b}B`;
    }
}

module.exports = compareNumber;