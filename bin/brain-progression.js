#!/usr/bin/env node
import askName from "../src/cli.js";
import startGame from "../src/gamesLogic.js";
import gameProgression from "../src/gameProgression.js";

const userName = askName();
console.log('What number is missing in the progression?');
console.log(startGame(gameProgression, userName));