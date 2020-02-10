// 1
function jediName(firstName, lastName) {
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}

console.log(jediName('Beyonce', 'Muhiddin'));

// 2
function beyond(num){
  if (num === Infinity){
    console.log('And beyond!');
  }
  else if (num !== Infinity && num > 0){
    console.log('To Infinity!');
  }
  else if (num !== Infinity && num < 0){
    console.log('To negative infinity!');
  }
  else if (num === 0){
    console.log('Staying home');
  }
}

beyond(0);

// 3 Cracking the code

function decode(encoded) {
  let words = encoded.split(' ');
  let result = '';
  for(let i = 0; i < words.length; i++) {
    if(words[i][0] === 'a') {
      result += words[i][1];
    } else if(words[i][0] === 'b') {
      result += words[i][2];
    } else if(words[i][0] === 'c') {
      result += words[i][3];
    }else if(words[i][0] === 'd') {
      result += words[i][4];
    } else {
      result += ' ';
    }
  }
  return result;
}

console.log(decode('craft block argon meter bells brown croon droop'));