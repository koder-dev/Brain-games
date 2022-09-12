import randomNumber from "./math.js";
import {getGreatestDivisor} from "./math.js";

const gameGcd = () => {
    const firstNumber = randomNumber(1, 100);
    const secondNumber = randomNumber(1, 100);
    const question = `${firstNumber} ${secondNumber}`;

    const correctAnswer= getGreatestDivisor(firstNumber, secondNumber);
    return [question, correctAnswer.toString()];
};

export default gameGcd;