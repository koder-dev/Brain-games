import randomNumber from "./math.js";

const isEven = (num) => num % 2 === 0;

const gameEven = () => {
    const thisNumber = randomNumber(1, 100);
    const expectedAnswer = isEven(thisNumber) ? "yes" : "no";
    return [thisNumber, expectedAnswer];
}

export default gameEven;
