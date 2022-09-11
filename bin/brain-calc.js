#!/usr/bin/env node
import askName from "../src/cli.js";
import startGame from "../src/gamesLogic.js";
import gameCalc from "../src/gameCalc.js";

const userName = askName();
console.log('What is the result of the expression?');
console.log(startGame(gameCalc, userName));