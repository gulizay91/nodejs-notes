/*
const character = require('./character');

console.log(character.marvelCharacters);
console.log(character.dcCharacters);
*/
const { marvelCharacters, dcCharacters } = require('./character');
console.log(marvelCharacters);
console.log(dcCharacters);


const operationalSystem = require('os');
//console.log(operationalSystem);
console.log(operationalSystem.platform(), operationalSystem.homedir());

