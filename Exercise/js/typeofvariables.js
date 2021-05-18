function showMessage(message){
	document.getElementById('message').textContent = message;
}

//type of variables
/*let price = 78;
showMessage(typeof price);*/
/*let price ="78";
showMessage(typeof price);*/

//Increment & Decrement
/*let price ="78";
showMessage(++price);
showMessage(price++);
console.log(price);*/

//Operator precedence
/*let price = 3 + 2 * 2;
showMessage(price);*/
/*let price = (3 + 2) * 2;
showMessage(price);*/

// Number precision
/*let price = 1.1 + 1.3;
showMessage(price);*/

// Negative Numbers
/*let price = -20;
showMessage(price);*/
/*let price = 20 - (-2);
showMessage(price);*/
/*let price = 0;
showMessage(--price);*/

// Strings
/*let msg = 'Hello World';
showMessage(msg);*/
/*let msg = "Hello World";
showMessage(msg);*/
/*let msg = "Hello \"World\"";
showMessage(msg);*/
/*let name = "Sneha";
let msg = `Hello ${name}`;
showMessage(msg);*/
/*let name = "Sneha";
let msg = `Hello 


${name}`;
showMessage(msg);
console.log(msg);*/

//Manipulating Strings
/*let msg = 'Hello';
msg = msg + ' World';
showMessage(msg);*/
/*let msg = 'Hello';
msg = msg.toLowerCase();
showMessage(msg);*/
/*let msg = 'Hello';
msg = msg.toUpperCase();
showMessage(msg);*/
/*let msg = 'Hello';
msg = msg.substring(1);
showMessage(msg);*/
/*let msg = 'Hello';
msg = msg.length;
showMessage(msg);*/
/*let msg = 'Hello';
msg = msg.length;
showMessage(typeof msg);*/
/*let msg = '123';
showMessage(msg+2);*/
/*let msg = 123;
showMessage(msg+2);*/

//Converting String and Numbers
/*let amount = 123;
amount = amount.toString();
showMessage(typeof amount);*/
/*let amount = Number.parseFloat('123.12');
showMessage(typeof amount);*/
/*let amount = Number.parseFloat('A123.12');
showMessage(amount);*/
/*let amount = Number.parseFloat('123.12A');
showMessage(amount);*/

//Boolean variables
/*let saved = true;
saved = !saved;
showMessage(saved);*/

// null & undefined
/*let saved;
showMessage(saved);
console.log(saved);*/
/*let saved;
saved = null;
showMessage(saved);
console.log(saved);*/

// Objects & Symbols
/*let person = {
	firstName: 'Himanshu',
	lastName: 'Sharma'
};
showMessage(typeof person);
console.log(person);*/
let person = {
	firstName: 'Himanshu',
	lastName: 'Sharma'
};
showMessage(person.firstName);
