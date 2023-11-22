
$(document).ready(function() {
    $('#searchInput').on('input', function() {
      var query = $(this).val().toLowerCase();
  

      $('#itemList li').each(function() {
      
        var itemText = $(this).text().toLowerCase();
        
        if (itemText.includes(query)) {
        
          $(this).show();
        } else {
         
          $(this).hide();
        }
      });
    });
  });

  const cardSection = document.getElementById('cardSection');
  const paypalSection = document.getElementById('paypalSection');
  const paymentMessage = document.getElementById('paymentMessage');

  document.getElementById('cardRadio').addEventListener('click', () => {
      cardSection.style.display = 'block';
      paypalSection.style.display = 'none';
  });

  document.getElementById('paypalRadio').addEventListener('click', () => {
      cardSection.style.display = 'none';
      paypalSection.style.display = 'block';
  });

  function processCardPayment() {
      const fullName = document.getElementById('fullName').value;
      const cardNumber = document.getElementById('cardNumber').value;
      const cvv = document.getElementById('cvv').value;
      const amount = document.getElementById('amount').value;

      // Perform payment processing logic here
      // For demonstration purposes, just display a message
      paymentMessage.innerHTML = `Payment processing for ${fullName}. Check your email for the security code.`;
  }

  function processPayPalPayment() {
      const paypalEmail = document.getElementById('paypalEmail').value;

      // Perform PayPal payment processing logic here
      // For demonstration purposes, just display a message
      paymentMessage.innerHTML = `Payment processing for PayPal account ${paypalEmail}. Check your email for the security code.`;
  }

