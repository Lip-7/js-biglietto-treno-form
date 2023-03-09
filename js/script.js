function priceCalculator(){
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;
    let priceMoltiplicator = 0.21;
    var errorMessage = 'Sorry but both fields must be greater then';
    let price = km * priceMoltiplicator;
    var offert = 'standard offert';
    const trainAvarageSpeed = 140;
    var minutesTraveling = ((km / trainAvarageSpeed) * 60).toFixed(2);
    if (age < 18){
        price *= 0.8;
        offert = 'underage offert';
    }else if (age > 65){
        price *= 0.6;
        offert = 'retired offert';
    }
/* modify the html with the elaborated dates */
    if ((age != 0) && (km != 0)){   
        document.getElementById('ticketMessage').innerHTML = `<h2 id="ticketMessage" class="h1 m-5">The ticket cost is <span id="ticketCosttry">${price.toFixed(2)}</span> &euro;</h2>`;
        document.getElementById('ticketDatails').innerHTML = `<h6>Every km on our trains costs ${priceMoltiplicator} &euro;</h6>`
        document.getElementById('ticketDatails').innerHTML += `<h6 class="mt-4">Since the age of the traveler is ${age}, you got the <em class='h5'>${offert}</em></h6>`
        document.getElementById('ticketDatails').innerHTML += `<h6 class="mt-4">Since the journey will be ${km}Km it will last on average ${minutesTraveling} minutes</h6>`
    }else{
        document.getElementById('ticketMessage').innerHTML = `<h2 id="ticketMessage" class="h1 m-5">${errorMessage} <span id="ticketCosttry">0</span> &euro;</h2>`;
    }
/* modify the visibility of the elements */
    document.getElementById('result').classList.remove('d-none');
    document.getElementById('calculator').classList.add('d-none');
}

/* Associate to the button 'btnCalc' the function priceCalculator */
document.getElementById('btnCalc').addEventListener('click', priceCalculator);
/* Associate some html references to variables */
const btnShowDetails = document.getElementById('btnShowDetails');
var offcanvas = document.getElementById('offcanvasScrolling');
var btnClose = document.querySelector('.btn-close');
/* Let's do the function that the buttons must execute*/
btnShowDetails.addEventListener('click', function () {
    offcanvas.classList.add('show');
});
btnClose.addEventListener('click', function () {
    offcanvas.classList.remove('show');
});
