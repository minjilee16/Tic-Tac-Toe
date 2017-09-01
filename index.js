const cells = document.querySelectorAll('.cell');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const playBoard = document.querySelector('.play');
const resultDiv = document.querySelector('.result');
const xShape = document.querySelector('.x-win');
const oShape = document.querySelector('.o-win');
const reset = document.querySelector('.reset');
const tieReset = document.querySelector('.tie-reset');
const winner = document.querySelector('.winner');
const tieDiv = document.querySelector('.tie');
let history = [];
let firstRow = [];
let secondRow = [];
let thirdRow = [];
let firstCol = [];
let secondCol = [];
let thirdCol = [];
let firstDia = [];
let secondDia = []; 

const clickCells = function () {
  if( history.length === 0 ) {
    this.childNodes[1].classList.add('circle-show');
    history.push('O');
  } else if ( history[history.length-1] === "O" && !this.childNodes[1].classList.contains('circle-show')) {
    this.childNodes[1].classList.remove('circle');
    this.childNodes[1].classList.add('cross');
    history.push('X');
  } else if ( history[history.length-1] === "X"  ) {
    this.childNodes[1].classList.add('circle-show');
    history.push('O');
  } 
}

const insertElement = function (arr) {
  if( arr.length < 4 ) {
    arr.push(history[history.length-1]); 
  } 
  if ( arr.length === 3 ) {
    result(arr);
  }
  if (history.length === 9 ) {
    tie();
  }
}

const tie = function () {
  playBoard.style.display = "none";
  resultDiv.style.display = "none"
  tieDiv.style.display = "initial";
}

const result = function (arr) {
  if( arr.indexOf('X') === -1 ) {
    // O wins 
    playBoard.style.display = "none";
    resultDiv.style.display = "initial"
    tieDiv.style.display = "none";
    xShape.style.display = "none";
    oShape.style.display = "initial";
    winner.style.color = "#20C1CE";
    winner.style.marginTop = "0";
    winner.style.marginLeft = "0";
    reset.style.marginLeft = "0";
  } else if ( arr.indexOf('O') === -1 ) {
    // x wins
    playBoard.style.display = "none";
    resultDiv.style.display = "initial"
    tieDiv.style.display = "none";
    xShape.style.display = "initial";
    oShape.style.display = "none";
    winner.style.color = "#F56974";
    winner.style.marginTop = "100px";
    winner.style.marginLeft = "40px";
    reset.style.marginLeft = "40px";
  }
}

const restart = function () {
  resultDiv.style.display = "none";
  tieDiv.style.display = "none";
  playBoard.style.display = "inline";
  cells.forEach( cell => {
    cell.childNodes[1].classList.add("circle"); 
    cell.childNodes[1].classList.remove("circle-show","cross");
  })
  history = [];
  firstRow = [];
  secondRow = [];
  thirdRow = [];
  firstCol = [];
  secondCol = [];
  thirdCol = [];
  firstDia = [];
  secondDia = []; 
}

cells.forEach( cell => cell.addEventListener('click', clickCells));
one.addEventListener('click', function () { insertElement(firstRow) });
one.addEventListener('click', function () { insertElement(firstCol) });
one.addEventListener('click', function () { insertElement(firstDia) });
two.addEventListener('click', function () { insertElement(firstRow) });
two.addEventListener('click', function () { insertElement(secondCol) });
three.addEventListener('click', function () { insertElement(firstRow) });
three.addEventListener('click', function () { insertElement(thirdCol) });
three.addEventListener('click', function () { insertElement(secondDia) });
four.addEventListener('click', function () { insertElement(secondRow) });
four.addEventListener('click', function () { insertElement(firstCol) });
five.addEventListener('click', function () { insertElement(secondRow) });
five.addEventListener('click', function () { insertElement(secondCol) });
five.addEventListener('click', function () { insertElement(firstDia) });
five.addEventListener('click', function () { insertElement(secondDia) });
six.addEventListener('click', function () { insertElement(secondRow) });
six.addEventListener('click', function () { insertElement(thirdCol) });
seven.addEventListener('click', function () { insertElement(thirdRow) });
seven.addEventListener('click', function () { insertElement(firstCol) });
seven.addEventListener('click', function () { insertElement(secondDia) });
eight.addEventListener('click', function () { insertElement(thirdRow) });
eight.addEventListener('click', function () { insertElement(secondCol) });
nine.addEventListener('click', function () { insertElement(thirdRow) });
nine.addEventListener('click', function () { insertElement(thirdCol) });
nine.addEventListener('click', function () { insertElement(firstDia) });
reset.addEventListener('click', restart );
tieReset.addEventListener('click', restart );