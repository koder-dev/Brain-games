#!/usr/bin/env node
import askName from "../src/cli.js";
import startGame from "../src/gamesLogic.js";
import gameGcd from "../src/gameGcd.js";

const userName = askName();
console.log('Find the greatest common divisor of given numbers.');
console.log(startGame(gameGcd, userName));