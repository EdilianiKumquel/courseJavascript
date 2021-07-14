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

 
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let messageThird = "";
//let messageEl = document.getElementById("message-el"); 
let messageEl = document.querySelector("#message-el"); 
let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");

function startGame(){
	renderGame();
}

function getRandomCard(){
	let cardRandom = Math.floor(Math.random()*13) + 1;
	return cardRandom;
}

function renderGame(){

	cardsEl.textContent = "Cards: ";
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + ", ";
	}

	sumEl.innerText = "Sum: " + sum;

	if (sum <= 20){
		messageThird = "Do you want to draw a new card?";
		messageEl.innerText = messageThird;
	} else if (sum === 21) {
		messageThird = "wohooo! You've got blackjack!";
		messageEl.innerText = messageThird;
	} else {
		messageThird = "You're out of the game!";
		messageEl.innerText = messageThird;
	}

}
 
function newCard() {
	let card = getRandomCard();
	sum += card;
	cards.push(card);
	renderGame();
}

