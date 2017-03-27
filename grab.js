//Gab Customer's Email address.
var email = document.getElementById('searchKeyword').value;

//Grab Customer's unique Amazon ID code.
var custId = document.getElementsByClassName('cust-id')[0].getAttribute('value');

//Grab specific Order Id number.
var orderId = document.getElementsByClassName('order-id')[0].getAttribute('value');

//Show data points.
console.log(email, custId, orderId);
