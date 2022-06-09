'use strict';

let score = 0;

let visitor = prompt('What is your name?');
alert('Greetings, ' + visitor + '! Please answer the following questions...');

// QUESTION 1

let Einstein = prompt(
  'Did Einstein fail most of the subjects in school except for physics and math?'
);
function questionOne(answer) {
  answer = answer.toLowerCase();
  if (answer === 'yes' || answer === 'y') {
    alert('That is correct!');
    score++;
  } else if (answer === 'no' || answer === 'n') {
    alert('Incorrect. Next question...');
  } else {
    alert('Please respond (y)es or (n)o');
  }
}
questionOne(Einstein);

// QUESTION 2

let happyBday = prompt(
  'Was "Happy Birthday" the first song ever sung in the space?'
);
function questionTwo(answer) {
  answer = answer.toLowerCase();
  if (answer === 'yes' || answer === 'y') {
    alert('That is correct!');
    score++;
  } else if (answer === 'no' || answer === 'n') {
    alert('Incorrect. Next question...');
  } else {
    alert('Please respond (y)es or (n)o');
  }
}
questionTwo(happyBday);

// QUESTION 3

let mice = prompt('Do mice have more bones than humans?');
function questionThree(answer) {
  answer = answer.toLowerCase();
  if (answer === 'yes' || answer === 'y') {
    alert('That is correct!');
    score++;
  } else if (answer === 'no' || answer === 'n') {
    alert('Incorrect. Next question...');
  } else {
    alert('Please respond (y)es or (n)o');
  }
}
questionThree(mice);

// QUESTION 4

let freddie = prompt('Was Freddie Mercury the lead gutarist of "Queen"?');
function questionFour(answer) {
  answer = answer.toLowerCase();
  if (answer === 'yes' || answer === 'y') {
    alert('Incorrect. Next question...');
  } else if (answer === 'no' || answer === 'n') {
    alert('That is correct!');
    score++;
  } else {
    alert('Please respond (y)es or (n)o');
  }
}
questionFour(freddie);

// QUESTION 5

let mars = prompt('Is Mars the largest planet in the solar system?');
function questionFive(answer) {
  answer = answer.toLowerCase();
  if (answer === 'yes' || answer === 'y') {
    alert('Incorrect. Better luck next time, ' + visitor + '!');
  } else if (answer === 'no' || answer === 'n') {
    alert('That is correct! Welcome, ' + visitor + '!');
    score++;
  } else {
    alert('Next time please respond only (y)es or (n)o, ' + visitor + '.');
  }
}
questionFive(mars);

// QUESTION 6

let totalChances = 4;
let correctAnswer = 7;

function questionSix() {
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
}
questionSix();

// QUESTION 7

let fruitNames = ['mango', 'pear', 'mandarin'];
let attempts = 6;
let fruitAnswer = false;

function questionSeven() {
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
}
questionSeven();

alert('FINAL SCORE: ' + score);
