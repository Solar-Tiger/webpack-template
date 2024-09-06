/* eslint-disable prefer-const */
console.log(23 + 97); // add 2 numbers together! 120

console.log(6 + 12 + 45 + 23 + 99 + 34); // add a sequence of 6 different numbers together. 219

console.log((4 + 6 + 9) / 77); // print the solution to the equation. answer approx. 0.24675

// lets use variables!

// let a = 10;

// console.log(a);

// console.log(9 * a);

// let b = 7 * a;

// console.log(b);

// next sequence

const max = 57;

const actual = max - 13;

const percentage = actual / max;

console.log(percentage); // answer aprprox. 0.7719

console.log(+'3' + 4);

// username "Admin"

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// password "TheMaster"

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

// begin

// "Who's there?"

// Cancel == Canceled, Other = I don't know you, Admin = Password?

// Cancel = Canceled, Other = wrong password, TheMaster = "Welcome!"

// let username = prompt("Who's there?"); !!!!!!!!!!!!!!!1

// this runs if it's an empty string, the Esc key is hit or the cancel button is pressed
// if (username === '' || username === null) {
//   alert('Canceled');
// }

// // this runs if the string for usename is NOT "Admin"
// else if (username != 'Admin') {
//   alert("I don't know you");
// }

// // this runs if username is "Admin"
// else if (username === 'Admin') {
//   let password = prompt('Password?');

//   // this runs if it's an empty string, the Esc key is hit or the cancel button is pressed
//   if (password === '' || password === null) {
//     alert('Canceled');
//   }

//   // this runs if the string for password is NOT "TheMaster"
//   else if (password != 'TheMaster') {
//     alert('Wrong password');
//   }

//   // this runs if the string for the password is "TheMaster"
//   if (password === 'TheMaster') {
//     alert('Welcome!');
//   }
// }

// console.log(5 < 4 ? 'Yes' : 'No');

// if (5 > 4) {
//   console.log('Hello there');
// }

// console.log('Goodbye there');

// let number1 = prompt('Pick a number:');
// let number2 = prompt('Pick a second number:');

// alert(+number1 + +number2);

// eslint-disable-next-line prettier/prettier
// let result = a + b < 4 ? 'Below' : 'Over';

// console.log(result);

// const x = 1;

// function a() {
//   const y = 2;
//   output(x);
// }

// function b() {
//   const z = 3;
//   output(x);
// }

// function output(value) {
//   const para = document.createElement('p');
//   document.body.appendChild(para);
//   para.textContent = `Value: ${value}`;
// }

// output(x);

// function checkAge(age) {
//   return age >= 18 ? true : 'Did parents allow you?';
// }

// console.log(checkAge(19));

function add7(a) {
  return a + 7;
}

console.log(add7(3));

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 4));

function capitalize() {
  let string = prompt('Enter any word/words');

  let firstCharacterCapitalized = string[0].toUpperCase();

  let remainingString = string.slice(1);

  console.log(firstCharacterCapitalized + remainingString);
}

// capitalize();

function lastLetter() {
  let string = 'Hello';

  console.log(string.slice(-1));
}

lastLetter();

function FirstFactorial(num) {
  // factorial loop
  tempNum = num;

  for (let i = 1; i < num; i++) {
    tempNum *= i;
  }

  num = tempNum;

  return num;
}

// keep this function call here
console.log(FirstFactorial(5));

function FirstReverse(str) {
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    temp = str[i] + temp;
  }
  // code goes here
  return temp;
}

// keep this function call here
console.log(FirstReverse('Happy'));

function reverse(str) {
  let arr = str.split('');
  arr.reverse();
  let join = arr.join('');

  return join;
}

console.log(reverse('Go lucky'));

document.body.style.fontSize = '36px';

function leftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      document.write('#');
    }
    document.write('<br>');
  }
}

function rightTriangle(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      document.write('#');
    }
    document.write('<br>');
  }
}

function sidewaysTriangle(n) {
  leftTriangle(n);
  rightTriangle(n - 1);
}

// sidewaysTriangle(3);

// input(5);

function total() {
  let ccn = prompt('Enter a number between 10 and 16 digits')
    .split('')
    .reverse();

  if (ccn.length < 10 || ccn.length > 16) {
    alert('That is not between 10 and 16 digits');

    return 1;
  }

  let validate = 0;

  for (let i = 0; i < ccn.length; i++) {
    let ccn2 = parseInt(ccn[i]);

    if (i % 2 === 0) {
      validate += ccn2;
    } else if (i % 2 === 1) {
      ccn3 = ccn2 * 2;

      if (ccn3 >= 10) {
        ccn3 -= 9;

        validate += ccn3;
      } else {
        validate += ccn3;
      }
    }
  }

  if (validate % 10 === 0) {
    console.log('Valid');
  } else {
    console.log('Not valid');
  }
}

// total();

function decode() {
  let test = prompt('Enter words');
  let test2 = [
    'u',
    'c',
    'l',
    'o',
    'p',
    'e',
    'f',
    'i',
    'v',
    't',
    'd',
    'r',
    'k',
    'w',
    'x',
    'a',
    'n',
    'm',
    'g',
    'j',
    'h',
    's',
    'z',
    'y',
    't',
    'b',
    'q',
  ];
  for (let i = 0; i < test.length; i++) {
    // console.log(test.charCodeAt([i]));
    let result = test.charCodeAt([i]);
    let result2 = test[i];
    // if it's upper case
    if (result >= 65 && result <= 90) {
      let upper = test.charCodeAt([i]) - 65;
      console.log(test2[upper].toUpperCase());
    }
    // if it's lower case
    else if (result >= 97 && result <= 122) {
      let lower = test.charCodeAt([i]) - 97;
      console.log(test2[lower].toLowerCase());
    }
    // if it's not alphanumeric or a symbol
    else {
      console.log(result2);
    }
  }
}

// decode();

document.write('<br>');

for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write('#');
  }
  document.write('<br>');
}

function wordCount() {
  let words = 'Hello, world, how are you?';

  let words2 = words.split(' ').shift().length;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === ' ') {
      console.log('Hi');
    }
  }
}

// wordCount();

function wordCount() {
  let word = 'How are you, sir?';
  let word2 = 'How are you, sir?'.split(' ');
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ' ') {
      for (let j = 0; j < word2.length; j++) {
        // code here

        console.log(word2[j].length);
      }
      return 0;
    }
  }
}
wordCount();

function upThenDown() {
  let word = prompt('Enter ONE word');
  let i = 0;
  for (; i < word.length; i++) {
    document.write(word.slice(i));
    if (i != word.length) {
      document.write('<br>');
    }
  }
  for (let j = word.length - 2; j >= 0; j--) {
    document.write(word.slice(j));
    document.write('<br>');
  }
}

// upThenDown();

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = ['rock', 'paper', 'scissors'];

  let cSelection =
    choice[Math.floor(Math.random() * choice.length)].toLowerCase();

  if (playerScore !== 5 && computerScore !== 5) {
    console.log(`Computer chose ${cSelection}`);
  }

  return cSelection;
}

function pChoice1() {
  return 'rock';
}

function pChoice2() {
  return 'paper';
}

function pChoice3() {
  return 'scissors';
}

function keepScore(result) {
  if (result === "It's a tie") {
    console.log(
      `No score change, pScore ${playerScore} and cScore ${computerScore}`
    );
  }

  // code
  else if (result === 'Player wins') {
    playerScore++;
    console.log(
      `Player won, pScore now ${playerScore} and cScore now ${computerScore}`
    );
  }

  // code
  else if (result === 'Computer wins') {
    computerScore++;
    console.log(
      `Computer won, pScore now ${playerScore} and cScore now ${computerScore}`
    );
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie";
  }

  // code
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'Player wins';
  }

  return 'Computer wins';
}

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

function gameStart(playerSelection) {
  let computerSelection = getComputerChoice();

  if (playerScore !== 5 && computerScore !== 5) {
    console.log(playRound(playerSelection, computerSelection));

    keepScore(playRound(playerSelection, computerSelection));

    if (playerScore === 5) {
      console.log('Player emerges victorious');
    }

    // code
    else if (computerScore === 5) {
      console.log('Computer emerges victorious');
    }
  }

  // code
  else if (playerScore === 5) {
    return 'Game over';
  }

  // code
  else if (computerScore === 5) {
    return 'Game over';
  }
}

function game1() {
  gameStart(pChoice1());
}

function game2() {
  gameStart(pChoice2());
}

function game3() {
  gameStart(pChoice3());
}

rock.addEventListener('click', game1);
paper.addEventListener('click', game2);
scissors.addEventListener('click', game3);

function func(z) {
  z += 1;
  let b = 15;
  console.log(z);
  console.log(b);
  return z;
}

z = 5;
b = 10;
console.log(z);
b = func(z);
console.log(z);
console.log(b);
