// Variabili
const kilometresInput = document.getElementById("kilometres");
const ageInput = document.getElementById("age");
const button = document.querySelector(".btn");
const anagraphicsInput = document.getElementById("anagraphics");

const twentyDiscount = parseInt(20);
const fortyDiscount = parseInt(40);

const resultParagraph = document.getElementById('result');

// Click

button.addEventListener('click', function(){

const kilometresTravel = parseInt(kilometresInput.value);
const ageTraveler = parseInt(ageInput.value);
const anagraphics = anagraphicsInput.value;

console.log(kilometresTravel);
console.log(ageTraveler);

let finalPrice = kilometresTravel * 0.21;

if (!isNaN(kilometresInput) || !isNaN(ageInput)) {
    alert ('Il carattere inserito non è valido.')
} else {

if (ageTraveler < 18) {
    finalPrice = finalPrice * 0.8; 
} 

if (ageTraveler >= 65) {    
    finalPrice = finalPrice * 0.6; 
}
}
const anagraphicsResult = document.getElementById('anagraphics-result');
anagraphicsResult.innerText += ' ' + anagraphics;

const kilometresResult = document.getElementById('kilometres-result')
kilometresResult.innerText += ' ' + kilometresTravel;

const priceResult = document.getElementById('price-result')
priceResult.innerText += ' ' + finalPrice;

const ticketSection = document.getElementById('ticket-section');

ticketSection.className = '';

})
