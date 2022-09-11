#!/usr/bin/env node
import askName from "../src/cli.js";
import startGame from "../src/gamesLogic.js";
import gameEven from "../src/gameEven.js";

const userName = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(startGame(gameEven, userName));