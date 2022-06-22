console.log('JS OK')

// Prompt

const kilometresTravel = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
const ageTraveler = parseInt(prompt('Quanti anni hai?'));

console.log(kilometresTravel);
console.log(ageTraveler);

// Calc

let finalPrice = (kilometresTravel * 21) / 100;
console.log(finalPrice);

let finalPriceTeen = ''; 
let finalPriceElderly = ''; 

const twentyDiscount = parseInt(20);
const fortyDiscount = parseInt(40);

const resultParagraph = document.getElementById('result');

// Show

if (isNaN(kilometresTravel) || isNaN(ageTraveler)) {
    alert ('Il carattere inserito non è valido.')

} else {

if (ageTraveler <= 18) {
    finalPriceTeen = finalPrice - ((twentyDiscount / 100) * finalPrice);

    resultParagraph.innerHTML = `Hai ricevuto il 20% di sconto! Il prezzo del biglietto non è più <del> ${finalPrice}€ </del>, pagherai soltanto ${finalPriceTeen}€.`;

} else if (ageTraveler >= 65) {
    finalPriceElderly = finalPrice - ((fortyDiscount / 100) * finalPrice);
    
    resultParagraph.innerHTML = `Hai ricevuto il 40% di sconto! Il prezzo del biglietto non è più <del> ${finalPrice}€ </del>, pagherai soltanto ${finalPriceElderly}€.`;
    
} else {
    resultParagraph.innerText = `Il prezzo del biglietto è ${finalPrice}€.`;
 
}

}