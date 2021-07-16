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

//array
let cards = [];
let sum = 0;
let isAlive = false;
let messageThird = "";
let hasBlackJack = false;
let endGame = false;
let playerEl = document.getElementById("player-el"); 
let messageEl = document.querySelector("#message-el"); 
let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");

//object
let player = {
	name: "Ediliani",
	chips: 200
}

playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
	if (endGame === true) {
		cards = [];
		sum = 0;
	}
	isAlive = true;
	for (let i = 0; i<2; i++){
		cards.push(getRandomCard());
		sum += cards[i];
	}
	renderGame();
}

function getRandomCard(){
	let cardRandom = Math.floor(Math.random()*13) + 1;
	console.log(cardRandom);
	if (cardRandom === 11 || cardRandom === 12 || cardRandom === 13){
		return 10;
	} else if (cardRandom === 1){
		return 11;
	} else {
		return cardRandom;
	}
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
		hasBlackJack = true;
		endGame = true;
	} else {
		messageThird = "You're out of the game!";
		messageEl.innerText = messageThird;
		isAlive = false;
		endGame = true;
	}


}
 
function newCard() {
	if (isAlive === true && hasBlackJack === false) {
		let card = getRandomCard();
		sum += card;
		cards.push(card);
		renderGame();
	} else if (isAlive === false && endGame === false) {
		messageEl.textContent = "you do not start the game still";
	}

}

// section 4: practice time

//objects and functions
let person = {
	name: "Ediliani" ,
	age: "23" ,
	country: "Venezuela"
}

function logData(){
	let message4 = person.name + " is " + person.age + " years old and live in " + person.country;
	console.log(message4);
}	

logData();

//conditionals 
let age = 27;

if (age < 6) {
	console.log("It's free");
} else if (age < 18 ) {
	console.log("child discount");
} else if (age < 27 ) {
	console.log("student discount");
} else if (age < 67) {
	console.log("full price");
} else {
	console.log("senior citizen discount");
}

//loops
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia","Monaco"];

console.log("The 5 largest countries in the world");
for (let i = 0; i < largeCountries.length; i++) {
	console.log("- " + largeCountries[i]);
}

//push, pop, unshift, shift

largeCountries.shift();
largeCountries.unshift("China");
largeCountries.pop();
largeCountries.push("Pakistan");

console.log(largeCountries);

//logical operators
let dayOfMonth = 13;
let weekday = "Monday";

if (dayOfMonth === 13 && weekday === "Friday") {
	console.log("It's Friday the 13th, SCARY");
} else {
	console.log("any day")
}

// rock paper scissor game 

let gethand = ["rock", "paper", "scissor"];

function randomhands(){
	let numrandom = Math.floor(Math.random()*3); 
	return gethand[numrandom];
}

console.log(randomhands());