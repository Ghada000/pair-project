function processPayment() {
    var paymentMethod = document.getElementById('paymentMethod').value;

    if (paymentMethod === 'card') {
        var cardNumber = document.getElementById('cardNumber').value;
        var expiryDate = document.getElementById('expiryDate').value;
        var cvv = document.getElementById('cvv').value;

        // You should perform further validation and secure handling of credit card information.
        console.log('Card Number:', cardNumber);
        console.log('Expiry Date:', expiryDate);
        console.log('CVV:', cvv);

        // Here you can proceed to handle the credit card payment on the server side.
    } else if (paymentMethod === 'paypal') {
        // Handle PayPal payment logic (customize based on your PayPal integration).
        console.log('Processing payment with PayPal...');
    }
}
