'use strict';

let myTeam = 'Agatha Muhiddin';

console.log(myTeam);

function createGreeting(name, age){
    const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yob}.`;
}

const greeting1 = createGreeting('Agatha', 20);
console.log(greeting1);

function getYearOfBirth(age) {
    if (age < 0){
        throw new Error("Age can not be negative");
    } else {
      return 2020 - age;
    }
  }

  try {
    const greeting2 = createGreeting('Muhiddin', -20);
} catch(e) {
  console.log(e.message + "!!!!");
}
    
