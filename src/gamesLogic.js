import readlineSync from "readline-sync";

const startGame = (gameName, userName) => {
    const rounds = 3;
    for (let i = 0; i < rounds; i += 1) {
        const [question, correctAnswer] = gameName();
        console.log(`Question: ${question}`);
        const answerOfUser = readlineSync.question('Your answer: ');
        if (answerOfUser === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            return `Let's try again, ${userName}!`;
        }
    }
    return `Congratulations, ${userName}!`;
};

export default startGame;