const exchangeRates = {
    USD: { USD: 1, INR: 82.5, EUR: 0.91, GBP: 0.78 },
    INR: { USD: 0.012, INR: 1, EUR: 0.011, GBP: 0.0095 },
    EUR: { USD: 1.1, INR: 90.1, EUR: 1, GBP: 0.85 },
    GBP: { USD: 1.28, INR: 105.2, EUR: 1.17, GBP: 1 },
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(amount)) {
        resultDiv.innerText = 'Please enter a valid number.';
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const converted = (amount * rate).toFixed(2);
    resultDiv.innerText = `${amount} ${fromCurrency} = ${converted} ${toCurrency}`;
}






