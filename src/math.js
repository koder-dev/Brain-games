const randomNumber = (min, max) => {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};
export const isEven = (num) => num % 2 === 0;

export const getGreatestDivisor = (firstNum, secondNum) => {
    if (secondNum === 0) {
        return firstNum;
    }
    return getGreatestDivisor(secondNum, firstNum % secondNum);
};

export const isPrime = (num) => {
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

export default randomNumber;