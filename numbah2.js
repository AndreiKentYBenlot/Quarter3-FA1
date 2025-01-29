var first = prompt("What is your first name? ");
var last = prompt("What is your last name? ");
var birth = prompt("What is your birth year? ");

birth = parseInt(2025) - parseInt(birth);
		
document.getElementById("output").innerText = `Hello ${first} ${last}! How does it feel to be ${birth} years old?`;

