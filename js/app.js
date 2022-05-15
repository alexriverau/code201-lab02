'use strict';

let visitor = prompt('What is your name?');
console.log(visitor);
alert('Greetings, ' + visitor + '! Please answer the following questions...');

let Einstein = prompt(
  'Did Einstein fail most of the subjects in school except for physics and math?'
).toLowerCase();
console.log(Einstein);
if (Einstein === 'yes' || Einstein === 'y') {
  alert('That is correct!');
} else if (Einstein === 'no' || Einstein === 'n') {
  alert('Incorrect. Next question...');
} else {
  alert('Please respond (y)es or (n)o');
}

let happyBday = prompt(
  'Was "Happy Birthday" the first song ever sung in the space?'
).toLowerCase();
console.log(happyBday);
if (happyBday === 'yes' || happyBday === 'y') {
  alert('That is correct!');
} else if (happyBday === 'no' || happyBday === 'n') {
  alert('Incorrect. Next question...');
} else {
  alert('Please respond (y)es or (n)o');
}

let mice = prompt('Do mice have more bones than humans?').toLowerCase();
console.log(mice);
if (mice === 'yes' || mice === 'y') {
  alert('That is correct!');
} else if (mice === 'no' || mice === 'n') {
  alert('Incorrect. Next question...');
} else {
  alert('Please respond (y)es or (n)o');
}

let freddie = prompt(
  'Was Freddie Mercury the lead gutarist of "Queen"?'
).toLowerCase();
console.log(freddie);
if (freddie === 'yes' || freddie === 'y') {
  alert('Incorrect. Next question...');
} else if (freddie === 'no' || freddie === 'n') {
  alert('That is correct!');
} else {
  alert('Please respond (y)es or (n)o');
}

let mars = prompt(
  'Is Mars the largest planet in the solar system?'
).toLowerCase();
console.log(mars);
if (mars === 'yes' || mars === 'y') {
  alert('Incorrect. Better luck next time, ' + visitor + '!');
} else if (mars === 'no' || mars === 'n') {
  alert('That is correct! Welcome, ' + visitor + '!');
} else {
  alert('Next time please respond only (y)es or (n)o, ' + visitor + '.');
}

let totalChances = 4;
let correctAnswer = '7';
let answer = false;

while (totalChances && !answer) {
  let response = prompt(
    'What is my lucky number? Chances left: ' + totalChances);
  if (response === correctAnswer) {
    alert('You got it! ' + response + ' is my lucky number!');
    answer = true;
  } else if (response > correctAnswer) {
    alert('Lower! hint: single digit');
  } else if (response < correctAnswer) {
    alert('Higher!');
  } else (totalChances <= 0); {
    alert('My lucky number is 7');
  }
  totalChances--;
}

const fruitNames = ['mango', 'pear', 'mandarin'];
console.log(fruitNames);

const fruitGuess = prompt('What is my favorite fruit?').toLowerCase();

for (let i = 0; i < fruitNames.length; i++) {
  const fruitName = fruitNames[i];
  console.log(i, fruitName);
  if (fruitGuess === fruitName) {
    alert('Yes! ' + fruitGuess + ' is my favorite fruit!');
  }
}
