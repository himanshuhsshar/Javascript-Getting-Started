'use strict';
function showMessage(message){
	document.getElementById('message').textContent = message;
}


// Global Scope
/*const app = {
	productId: 12345,
	userName: 'Joe',
	orderNumber: 789
};
function showProductId() {
	console.log(app.productId);
}
showProductId();*/



// Function Scope
/*function showProductId() {
	let productId = 12345;
	console.log(productId);
}
showProductId();*/
/*function showProductId() {
	let productId = 12345;
	
}
showProductId();
console.log(productId); //error */
/*function showProductId() {
	let productId = 12345;
	function fix(){
		let productId = 45678;
		console.log('in fix: ', productId);
	}
	fix()
	console.log('in showProductId: ', productId);
}
showProductId();*/
/*function showProductId() {
	let productId = 12345;
	function fix(){
		console.log('in fix: ', productId);
	}
	fix()
	console.log('in showProductId: ', productId);
}
showProductId();*/
/*let productId = 12345;
function showProductId() {
	function fix(){
		console.log('in fix: ', productId);
	}
	fix()
	console.log('in showProductId: ', productId);
}
showProductId();*/



// var & Hoisting
/*console.log(productId);
var productId = 123;*/
/*console.log(productId);
let productId = 123;*/
/*showProductId();
function showProductId(){
	console.log(123);
};*/



// Undeclared variable and Strict Mode
/*productId=1234;
console.log(productId);*/
/*productId=1234;
console.log(window.productId);*/
productId=1234;
console.log(productId);
