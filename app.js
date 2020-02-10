'use strict';

let myTeam = 'Agatha Muhiddin';

console.log(myTeam);

function createGreeting(name, age){
    const yearOfBirth = 2020 - age;
  return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}.`;
}

const greeting1 = createGreeting();
console.log(greeting1);