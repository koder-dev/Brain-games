import randomNumber from "./math.js";
import {isPrime} from "./math.js";

const gamePrime = () => {
    const thisNumber = randomNumber(1, 201);
    const correctAnswer = isPrime(thisNumber) ? 'yes' : 'no';
    return [thisNumber, correctAnswer];
};

export default gamePrime;