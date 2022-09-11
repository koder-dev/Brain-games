import randomNumber from "./math.js";

const getGreatestDivisor = (firstNum, secondNum) => {
    if (secondNum === 0) {
        return firstNum;
    }
    return getGreatestDivisor(secondNum, firstNum % secondNum);
};

const gameGcd = () => {
    const firstNumber = randomNumber(1, 100);
    const secondNumber = randomNumber(1, 100);
    const question = `${firstNumber} ${secondNumber}`;

    const correctAnswer= getGreatestDivisor(firstNumber, secondNumber);
    return [question, correctAnswer.toString()];
};

export default gameGcd;