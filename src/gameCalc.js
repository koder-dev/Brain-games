import randomNumber from "./math.js";

const gameCalc = () => {
    let correctAnswer = 0;
    const firstNumber = randomNumber(1, 100);
    const secondNumber = randomNumber(1, 100);
    const mathSymbols = ['+', '-', '*'];
    const randomSymbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
    const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;

    switch (randomSymbol) {
        case '+':
            correctAnswer = firstNumber + secondNumber;
            break;
        case '-':
            correctAnswer = firstNumber - secondNumber;
            break;
        case '*':
            correctAnswer = firstNumber * secondNumber;
            break;
        default:
            throw new Error('this operation does not exist');
    }
    return [question, correctAnswer.toString()];
}

export default gameCalc;