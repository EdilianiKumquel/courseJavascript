let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(countl);

function increment() {
	count += 1;
	countEl.innerText = count;
}
function save(){
	saveEl.innerText += count + " - ";
}

function reset() {
	count = 0;
	countEl.innerText = count;
}

//section 1: Build a passenger counter app
//Lesson 26: Debugging online 1:05:37