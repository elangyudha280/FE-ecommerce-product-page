

// function to change number to format string dolar
function numberToDollar(number) {
    let formatCurrency = new Intl.NumberFormat('en-US', {
        currency: 'USD',
    });

    let money = formatCurrency.format(number);
    return money;
}
export default numberToDollar;