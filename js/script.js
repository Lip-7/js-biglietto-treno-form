function priceCalculator(){
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;
    let priceMoltiplicator = 0.21;
    var errorMessage = 'Sorry but both fields must be greater then';
    let price = km * priceMoltiplicator;
    if (age < 18){
        price *= 0.8;
    }else if (age > 65){
        price *= 0.6;
    }
    if ((age != 0) && (km != 0)){
        document.getElementById('ticketMessage').innerHTML = `<h2 id="ticketMessage" class="h1 m-5">The ticket cost is <span id="ticketCosttry">${price.toFixed(2)}</span> &euro;</h2>`;
    }else{
        document.getElementById('ticketMessage').innerHTML = `<h2 id="ticketMessage" class="h1 m-5">${errorMessage} <span id="ticketCosttry">0</span> &euro;</h2>`;
    }
    document.getElementById('result').classList.remove('d-none');
    document.getElementById('calculator').classList.add('d-none');
}


document.getElementById('btnCalc').addEventListener('click', priceCalculator);

const btnShowDetails = document.getElementById('btnShowDetails');
var offcanvas = document.getElementById('offcanvasScrolling');
btnShowDetails.addEventListener('click', function () {
    offcanvas.classList.add('show');
});
var btnClose = document.querySelector('.btn-close');
btnClose.addEventListener('click', function () {
    offcanvas.classList.remove('show');
});
