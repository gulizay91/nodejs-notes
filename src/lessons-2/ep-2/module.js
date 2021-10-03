/*
const character = require('./character');

console.log(character.marvelCharacters);
console.log(character.dcCharacters);
*/
const { marvelCharacters, dcCharacters } = require('./character');
console.log(marvelCharacters);
console.log(dcCharacters);


const operatingSystem = require('os');
//console.log(operatingSystem);
console.log(operatingSystem.platform(), operatingSystem.homedir());

