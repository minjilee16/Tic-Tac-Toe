let history = []; 
let topHorizontal = [];
let secondHorizontal = [];
let thirdHorizontal = [];
let firstVertical = [];
let secondVertical = [];
let thirdVertical = [];
let firstDiagonal = [];
let secondDiagonal = [];
// write a function if any of those array has more than 3 same elements either O or X. 
// then alert who wins. 
var generateWinner = function (array) {
  // iterate over topHorizontal array 
  // if length of array is three and all elements are either all 'O' or 'X'
  // if it's X then alert X wins 
  // if it's O then alert O wins
  if( array.length === 3 && array.indexOf('X') === -1 ) {
    alert('O wins!'); 
  } else if ( array.length === 3 && array.indexOf('O') === -1 ) {
    alert('X wins!');
  }
}
// write a function which generates a value of each box. 
var getValue = function () {
  var value = null; 
  if( history.length === 0 ) {
    value = "O";
  } else if ( history[history.length-1] === 'O') {
    value = 'X'; 
  } else if ( history[history.length-1] === 'X') {
    value = 'O';
  }
  return value; 
}

document.getElementById('1-1').onclick = function () {
  // get inner value 
  var innerValue = document.getElementById('1-1').innerHTML;
  // if the inner value is empty then get the value invoking the get value function and set up new value to the box 
  // push the value to first horizontal line and first vertical line and first diagonal array 
  if( innerValue === '' ) {
    var value = getValue(); 
    document.getElementById('1-1').innerHTML = value; 
    topHorizontal.push(value);
    firstVertical.push(value);
    firstDiagonal.push(value); 
    history.push(value); 
    generateWinner(topHorizontal);
    generateWinner(firstVertical);
    generateWinner(firstDiagonal);
  } 
}

document.getElementById('1-2').onclick = function () {
  var innerValue = document.getElementById('1-2').innerHTML;
  if( innerValue === '' ) {
    var value = getValue(); 
    document.getElementById('1-2').innerHTML = value; 
    topHorizontal.push(value);
    secondVertical.push(value);
    history.push(value); 
    generateWinner(topHorizontal);
    generateWinner(secondVertical);
  } 
}

document.getElementById('1-3').onclick = function () {
  var innerValue = document.getElementById('1-3').innerHTML;
  if( innerValue === '' ) {
    var value = getValue(); 
    document.getElementById('1-3').innerHTML = value; 
    topHorizontal.push(value);
    thirdVertical.push(value);
    secondDiagonal.push(value);
    history.push(value); 
    generateWinner(topHorizontal); 
    generateWinner(thirdVertical);
    generateWinner(secondDiagonal);
  }
}

document.getElementById('2-1').onclick = function () {
  var innerValue = document.getElementById('2-1').innerHTML;
  if( innerValue === '' ) {
    var value = getValue(); 
    document.getElementById('2-1').innerHTML = value; 
    secondHorizontal.push(value);
    firstVertical.push(value);
    history.push(value); 
    generateWinner(firstVertical);
    generateWinner(secondHorizontal);
  }
}

document.getElementById('2-2').onclick = function () {
  var innerValue = document.getElementById('2-2').innerHTML;
  if( innerValue === '' ) {
    var value = getValue(); 
    document.getElementById('2-2').innerHTML = value; 
    secondHorizontal.push(value);
    secondVertical.push(value);
    secondDiagonal.push(value);
    firstDiagonal.push(value);
    history.push(value); 
    generateWinner(firstDiagonal);
    generateWinner(secondHorizontal);
    generateWinner(secondVertical); 
    generateWinner(secondDiagonal);
  }
}

document.getElementById('2-3').onclick = function () {
  var innerValue = document.getElementById('2-3').innerHTML;
  if( innerValue === '' ) {
    var value = getValue(); 
    document.getElementById('2-3').innerHTML = value; 
    secondHorizontal.push(value);
    thirdVertical.push(value);
    history.push(value); 
    generateWinner(secondHorizontal);
    generateWinner(thirdVertical); 
  }
}

document.getElementById('3-1').onclick = function () {
  var innerValue = document.getElementById('3-1').innerHTML;
  if( innerValue === '' ) {
    var value = getValue(); 
    document.getElementById('3-1').innerHTML = value; 
    thirdHorizontal.push(value);
    firstVertical.push(value);
    secondDiagonal.push(value);
    history.push(value); 
    generateWinner(thirdHorizontal);
    generateWinner(firstVertical); 
    generateWinner(secondDiagonal);
  }
}

document.getElementById('3-2').onclick = function () {
  var innerValue = document.getElementById('3-2').innerHTML;
  if( innerValue === '' ) {
    var value = getValue(); 
    document.getElementById('3-2').innerHTML = value; 
    thirdHorizontal.push(value);
    secondVertical.push(value);
    history.push(value); 
    generateWinner(thirdHorizontal);
    generateWinner(secondVertical); 
  }
}

document.getElementById('3-3').onclick = function () {
  var innerValue = document.getElementById('3-3').innerHTML;
  if( innerValue === '' ) {
    var value = getValue(); 
    document.getElementById('3-3').innerHTML = value; 
    thirdHorizontal.push(value);
    thirdVertical.push(value);
    firstDiagonal.push(value);
    history.push(value); 
    generateWinner(thirdHorizontal);
    generateWinner(thirdVertical); 
    generateWinner(firstDiagonal);
  }
}

document.getElementById('restart').onclick = function () {
  document.getElementById('1-1').innerHTML =''; 
  document.getElementById('1-2').innerHTML =''; 
  document.getElementById('1-3').innerHTML =''; 
  document.getElementById('2-1').innerHTML =''; 
  document.getElementById('2-2').innerHTML =''; 
  document.getElementById('2-3').innerHTML =''; 
  document.getElementById('3-1').innerHTML =''; 
  document.getElementById('3-2').innerHTML =''; 
  document.getElementById('3-3').innerHTML =''; 
  history = []; 
  topHorizontal = [];
  secondHorizontal = [];
  thirdHorizontal = [];
  firstVertical = [];
  secondVertical = [];
  thirdVertical = [];
  firstDiagonal = [];
  secondDiagonal = [];
}