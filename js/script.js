// Variabili
const kilometresInput = document.getElementById("kilometres");
const ageInput = document.getElementById("age");
const sendButton = document.getElementById("send");
const cancelButton = document.getElementById("cancel");

const anagraphicsInput = document.getElementById("anagraphics");

const twentyDiscount = parseInt(20);
const fortyDiscount = parseInt(40);

const resultParagraph = document.getElementById('result');

const kilometresTravel = parseInt(kilometresInput.value);
const ageTraveler = parseInt(ageInput.value);
const anagraphics = anagraphicsInput.value;

const ticketSection = document.getElementById('ticket-section');

// Click

sendButton.addEventListener('click', function(){
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
anagraphicsResult.innerHTML = `<h3 class="fs-6">NOME PASSEGGERO: </h2>${anagraphics}`;

const kilometresResult = document.getElementById('kilometres-result')
kilometresResult.innerHTML = `<h3 class="fs-6">CHILOMETRI: </h2>${kilometresTravel}`;

const priceResult = document.getElementById('price-result')
priceResult.innerHTML = `<h3 class="fs-6">TARIFFA: </h2>${finalPrice}`;

ticketSection.className = '';
})

cancelButton.addEventListener('click', function() {
    ticketSection.className = 'd-none';
 
})
