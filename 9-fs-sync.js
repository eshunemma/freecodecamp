const {readFileSync, writeFileSync} = require('fs');
console.log('start');

// reading files in directory
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

//creating a new file
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'}); //flag append your text
console.log('done with this task');
console.log('starting the next one');