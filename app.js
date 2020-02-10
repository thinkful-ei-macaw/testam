'use strict';

let myTeam = 'Agatha Muhiddin';

console.log(myTeam);

function createGreeting(name, age){
    const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yob}.`;
}

const greeting1 = createGreeting();
console.log(greeting1);

function getYearOfBirth(age) {
  return 2020 - age;
}