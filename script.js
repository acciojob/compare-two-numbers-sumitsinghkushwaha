//your JS code here. If required.
// Get the first number from the user
const input1 = prompt("Enter the first number:");

// Get the second number from the user
const input2 = prompt("Enter the second number:");

// Parse the inputs as numbers
const number1 = parseFloat(input1);
const number2 = parseFloat(input2);

// Check if the numbers are equal and create the result message
const areEqual = number1 === number2;
const resultMessage = `Are the numbers equal? ${areEqual}`;

// Display the result in an alert box
alert(resultMessage);
