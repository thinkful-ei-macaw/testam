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

//4

function howMany(month, year){
  let result = '';

  if ((year % 4 == 0 && year % 100 != 0 || year % 400 == 0)){
    result += 'February has 29 days';
  } else {
  switch(month){
    case 'January': result += 'January has 31 days';
      break;
    case 'February': result += 'February has 28 days';
      break;
    case 'March': result += 'March has 31 days';
      break;
    case 'April': result += 'April has 30 days';
      break; 
    case 'May': result += 'May has 31 days';
      break;
    case 'June': result += 'June has 30 days';
      break;
    case 'July': result += 'July has 31 days';
      break;
    case 'August': result += 'August has 31 days';
      break;
    case 'September': result += 'September has 30 days';
      break; 
    case 'October': result += 'October has 31 days';
      break;
    case 'November': result += 'November has 30 days';
      break;
    case 'December': result += 'December has 31 days';
      break;
    }
  }
  return result
}

console.log(howMany('February', 2020));

// 5 Rock Paper Scissors
function playGame(num) {
  if(num < 1 || num > 3) {
    throw new Error('invalid number!');
  } else {
  const randomNo = Math.floor(Math.random() * 3) + 1;
  if(num === randomNo) {
    console.log('Tie');
  } else if(num === 1 && randomNo == 3 || num === 2 && randomNo === 1 || num === 3 && randomNo === 2) {
    console.log('Player wins!');
  }  else {
    console.log('Computer wins!');
  }
 }
}

playGame(3);

playGame(-5);