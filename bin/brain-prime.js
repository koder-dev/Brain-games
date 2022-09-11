#!/usr/bin/env node
import askName from "../src/cli.js";
import startGame from "../src/gamesLogic.js";
import gamePrime from "../src/gamePrime.js";

const userName = askName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
console.log(startGame(gamePrime, userName));