import randomNumber from "./math.js";
import {isEven} from "./math.js";

const gameEven = () => {
    const thisNumber = randomNumber(1, 100);
    const expectedAnswer = isEven(thisNumber) ? "yes" : "no";
    return [thisNumber, expectedAnswer];
}

export default gameEven;
