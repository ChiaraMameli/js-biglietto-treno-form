console.log('JS OK')

console.log('JS OK')

// Prompt

const kilometresInput = document.getElementById("kilometres");
const ageInput = document.getElementById("age");
const button = document.querySelector(".btn");

const twentyDiscount = parseInt(20);
const fortyDiscount = parseInt(40);

const resultParagraph = document.getElementById('result');

button.addEventListener('click', function(){

const kilometresTravel = kilometresInput.value;
const ageTraveler = ageInput.value;

console.log(kilometresTravel);
console.log(ageTraveler);

let finalPrice = kilometresTravel * 0.21;
let finalPriceTeen = finalPrice * 0.8; 
let finalPriceElderly = finalPrice * 0.6; 

if (isNaN(kilometresTravel) || isNaN(ageTraveler)) {
    alert ('Il carattere inserito non è valido.')

} else {

if (ageTraveler <= 18) {
    resultParagraph.innerHTML = `Hai ricevuto il 20% di sconto! Il prezzo del biglietto non è più <del> ${finalPrice}€ </del>, pagherai soltanto ${finalPriceTeen}€.`;

} else if (ageTraveler >= 65) {    
    resultParagraph.innerHTML = `Hai ricevuto il 40% di sconto! Il prezzo del biglietto non è più <del> ${finalPrice}€ </del>, pagherai soltanto ${finalPriceElderly}€.`;
   
} else {
    resultParagraph.innerText = `Il prezzo del biglietto è ${finalPrice}€.`;

}

}

})