import randomNumber from "./math.js";

const gameProgression = () => {
    let startNumber = randomNumber(1, 20);
    const growthPoint = randomNumber(1, 9);
    const progressionArr = [];
    progressionArr.push(startNumber);

    for (let ind = 0; ind <= randomNumber(5, 10); ind += 1) {
        startNumber += growthPoint;
        progressionArr.push(startNumber);
    }
    const positionOFCorrectAnswer = randomNumber(0, progressionArr.length - 1);
    const correctAnswer = progressionArr[positionOFCorrectAnswer];
    progressionArr[positionOFCorrectAnswer] = '..';
    const question = progressionArr.join(' ');

    return [question, correctAnswer.toString()];
};

export default gameProgression;