const stdin = require('mock-stdin').stdin();
const answerGenerator = require('../src/answer-generator');
const Game = require('../src/game');

describe('Game', ()=> {
    beforeEach(()=> {
        spyOn(answerGenerator, 'generator').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');
        const game = new Game();
        game.start();
    });
    it('guess rignt', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome\n');
        expect(console.log).toHaveBeenCalledWith('Please inputs your number');
        stdin.send('1234');
        expect(console.log).toHaveBeenCalledWith('congratulations\n');
    });
    it('guess wrong',()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome\n');

        for (let i=0;i<6;i++) {
            expect(console.log).toHaveBeenCalledWith('Please inputs your number');
            stdin.send('1235');
            expect(console.log).toHaveBeenCalledWith('3A0B');
        }
        expect(console.log).toHaveBeenCalledWith('game over\n');
        expect(console.log).toHaveBeenCalledWith(`answer:1234`);
        expect(process.exit).toHaveBeenCalled();
    });
    it('input double number',()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome\n');
        expect(console.log).toHaveBeenCalledWith('Please inputs your number');
        stdin.send('1124');
        expect(console.log).toHaveBeenCalledWith('Cannot input double number');
    })
});
