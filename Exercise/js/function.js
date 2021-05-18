function showMessage(message){
	document.getElementById('message').textContent = message;
}
function changePercentOff(percentage){
	document.getElementById('percent-off').textContent = percentage + "% OFF";
}
changePercentOff(30);

/*function logMessage(){
	console.log('Here is a message');
}
logMessage();
logMessage();*/


// function expressions
/*let myFunction = function (){
	console.log('Here is a message');
}
myFunction();*/
/*let myFunction = function loggingFunction(){
	console.log('Here is a message');
}
myFunction();*/


// Passing information to functions
/*let myFunction = function loggingFunction(message){
	console.log(message);
}
myFunction('Hello');*/
/*let myFunction = function loggingFunction(message,firstName){
	console.log(message);
	console.log(firstName);
}
myFunction('Hello','Himanshu');*/
/*let myFunction = function loggingFunction(message,firstName){
	console.log(message);
	console.log(firstName);
}
myFunction('Hello');*/



// Function return values
/*function getSecretCode(value){
	let code = value*42;
	return code;
}
showMessage(getSecretCode(2));*/
/*function getSecretCode(value){
	let code = value*42;
	//return code;
}
console.log(getSecretCode(2));*/
/*function getSecretCode(value){
	let code = value*42;
	return code;
}
let secretCode = getSecretCode(2);
showMessage(secretCode);*/


// function scope
/*function getSecretCode(value){
	let code = value*42;
	return code;
}
let secretCode = getSecretCode(2);
showMessage(code);*/
/*let key = 42;
function getSecretCode(value){
	let code = value*key;
	return code;
}
let secretCode = getSecretCode(2);
showMessage(secretCode);*/
/*let key = 42;
function getSecretCode(value){
	let keyGenerator = function(){
		let key = 12;
		console.log('in keyGenerator: ',key);
		return key;
	}
	let code = value*keyGenerator();
	console.log('in getSecretCode: ',key);
	return code;
}
let secretCode = getSecretCode(2);
showMessage(secretCode);*/






