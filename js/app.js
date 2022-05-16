'use strict';

let score = 0;

let visitor = prompt('What is your name?');
alert('Greetings, ' + visitor + '! Please answer the following questions...');

let Einstein = prompt(
  'Did Einstein fail most of the subjects in school except for physics and math?'
).toLowerCase();
if (Einstein === 'yes' || Einstein === 'y') {
  alert('That is correct!');
  score++;
} else if (Einstein === 'no' || Einstein === 'n') {
  alert('Incorrect. Next question...');
} else {
  alert('Please respond (y)es or (n)o');
}

let happyBday = prompt(
  'Was "Happy Birthday" the first song ever sung in the space?'
).toLowerCase();
if (happyBday === 'yes' || happyBday === 'y') {
  alert('That is correct!');
  score++;
} else if (happyBday === 'no' || happyBday === 'n') {
  alert('Incorrect. Next question...');
} else {
  alert('Please respond (y)es or (n)o');
}

let mice = prompt('Do mice have more bones than humans?').toLowerCase();
if (mice === 'yes' || mice === 'y') {
  alert('That is correct!');
  score++;
} else if (mice === 'no' || mice === 'n') {
  alert('Incorrect. Next question...');
} else {
  alert('Please respond (y)es or (n)o');
}

let freddie = prompt(
  'Was Freddie Mercury the lead gutarist of "Queen"?'
).toLowerCase();
if (freddie === 'yes' || freddie === 'y') {
  alert('Incorrect. Next question...');
} else if (freddie === 'no' || freddie === 'n') {
  alert('That is correct!');
  score++;
} else {
  alert('Please respond (y)es or (n)o');
}

let mars = prompt(
  'Is Mars the largest planet in the solar system?'
).toLowerCase();
if (mars === 'yes' || mars === 'y') {
  alert('Incorrect. Better luck next time, ' + visitor + '!');
} else if (mars === 'no' || mars === 'n') {
  alert('That is correct! Welcome, ' + visitor + '!');
  score++;
} else {
  alert('Next time please respond only (y)es or (n)o, ' + visitor + '.');
}

let totalChances = 4;
let correctAnswer = 7;

while (totalChances) {
  let response = prompt(
    'What is my lucky number? Chances left: ' + totalChances
  );
  if (response > correctAnswer) {
    alert('Lower! hint: single digit');
  } else if (response < correctAnswer) {
    alert('Higher!');
  } else if (response == 7) {
    alert('You got it! ' + response + ' is my lucky number!');
    score++;
    break;
  }
  totalChances--;
}
if (totalChances === 0) {
  alert('Ran out of chances. ' + correctAnswer + ' is my lucky number.');
}

const fruitNames = ['mango', 'pear', 'mandarin'];
let attempts = 6;
let fruitAnswer = false;

while (attempts && !fruitAnswer) {
  let fruitGuess = prompt(
    'What is my favorite fruit? Attempts left: ' + attempts
  ).toLowerCase();

  for (let i = 0; i < fruitNames.length; i++) {
    let fruitName = fruitNames[i];

    if (fruitGuess === fruitName) {
      alert(
        'Yes! ' +
          fruitNames[0] +
          ', ' +
          fruitNames[1] +
          ', and ' +
          fruitNames[2] +
          ' are my favorite fruits!'
      );
      fruitAnswer = true;
      score++;
    }
  }
  attempts--;
}

alert('FINAL SCORE: ' + score);
