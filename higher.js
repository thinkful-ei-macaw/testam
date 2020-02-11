'use strict';

// Functions as arguments(1)

function repeat(fn, n) {
  for(let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}
repeat(hello, 5);
repeat(goodbye, 5);

// =============================================================
// =============================================================

// Functions as arguments(2)

function filter(arr, fn) {
  // TASK: Define your function here
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

console.log(filter(myNames, (name) => name[0] === 'R'));

// ==================================================================
// ==================================================================

// Functions as return values

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if(warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else if(warningCounter === 0 || warningCounter >= 2) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Icy Road Start');
const slipperyWarning = hazardWarningCreator('Slippery When Wet');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');

iceWarning('South Tahoe Blvd and Lake St');
iceWarning('47th Ave and Illinois St');
iceWarning('Lincoln blvd and Colma St');

slipperyWarning('1st st and Rock ave');
slipperyWarning('Ice blvd and Water st');
slipperyWarning('Saint blvd and Dunbar blvd');

// ===================================================
// ===================================================

// forEach, filter and map
let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

console.log(turtleSteps.filter(function(step) {
  return step[0] >= 0 && step[1] >= 0;
}));

console.log(turtleSteps.map(function(step) {
  return step[0] + step[1];
}));

let count = 0;
turtleSteps.forEach(function(step) {
  let move = Math.abs(step[0] + step[1]);
  if(move === 1) {
    console.log(`Movement #${count}: ${move} step`);
  } else if(move === 0 || move >= 2) {
    console.log(`Movement #${count}: ${move} steps`);
  }
  count++;
});

let initialValue = '';
let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const words = input.split(' ');

console.log(words.reduce(function(acc, word) {
  if(word.length === 3) {
    initialValue += ' ';
  } else {
    initialValue += word.slice(0, word.length - 1) + word[word.length - 1].toUpperCase();
  }
}), initialValue);