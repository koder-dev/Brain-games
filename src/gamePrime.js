import randomNumber from "./math.js";

const isPrime = (num) => {
    if (num === 2 || num === 1) {
        return true;
    }
    for (let x = 2; x < num; x += 1) {
        if (num % x === 0) {
            return false;
        }
    }
    return true;
};

const gamePrime = () => {
    const thisNumber = randomNumber(1, 201);
    const correctAnswer = isPrime(thisNumber) ? 'yes' : 'no';
    return [thisNumber, correctAnswer];
};

export default gamePrime;