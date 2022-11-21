const tripLength = parseInt ( prompt ('Inserisci la lunghezza della tratta (in chilometri)'));
const passengerAge = prompt ('inserisci la tua eta\'');

let grossPrice = tripLength * 0.21;

console.log (grossPrice);

let finalPrice;


if ( passengerAge < 18 ) {
    finalPrice = (grossPrice - (grossPrice * 0.20));
    console.log (grossPrice * 0.20);
} else if ( passengerAge > 65) {
    finalPrice = (grossPrice - (grossPrice * 0.40));
    console.log (grossPrice * 0.40);
} else {
    finalPrice = grossPrice;
}


document.getElementById('output').innerHTML = `Il costo del biglietto &egrave; ${finalPrice.toFixed(2)} &euro;`;