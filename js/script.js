const  fromcurrency = document.getElementById('fromcurrency');
const  toCurrency = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const result = document.getElementById('result');

let from;
let to;
let amount;

function  convert() {
    from = fromcurrency.value;
    to = toCurrency.value;
    amount = amountInput.value;

    if(amount === "" || amount <= 0) {
         alert("Por favor, digite um valor válido.");
         return;
    }

    let url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      let rate = data.rates[to];
      document.getElementById("result").innerText = `${amount} ${from} = ${rate} ${to}`;
    })
    .catch(error => {
      alert("Ocorreu um erro. Tente novamente mais tarde.");
      console.error(error);
    });
}


function invertCurrencies() {
    let from = document.getElementById('fromcurrency');
    let to = document.getElementById('toCurrency');

    let temp = from.value;
    from.value = to.value;
    to.value = temp;

    convert();
}


