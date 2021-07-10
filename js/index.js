let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


function increment() {
	count += 1;
	countEl.textContent = count;
}
function save(){
	saveEl.textContent += count + " - ";
	count = 0;
	countEl.textContent = count;
}

//SECTION 2 practice time

let error = document.getElementById("error");

function error1(){
	let message = "Something went wrong, please try again";
	error.innerText = message;
}

//calculator super simple

let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").innerText = num1;
document.getElementById("num2-el").innerText = num2;
let total = document.getElementById("sum-el");
let msuma = document.getElementById("sum-el").textContent;

function add(){
	total.textContent = msuma + (num1 + num2);
}

function subtract(){
	total.textContent = msuma + (num1 - num2);
}

function divide(){
	total.textContent = msuma + (num1 / num2);
}

function multiply(){
	total.textContent = msuma + (num1 * num2);
}

// section 3 building a blackjack game.

let firstCard = 11;
let secondCard = 11;
let sum = firstCard + secondCard;
let age = 20;

if (sum < 21){
	console.log("Do you want to draw a new card?");
} else if (sum === 21) {
	console.log("wohooo! You've got blackjack!");
} else {
	console.log("You're out of the game!");
}

if (age < 21) {
	console.log("You can not enter the club!");
} else {
	console.log("Welcome to the jungle");
}

//