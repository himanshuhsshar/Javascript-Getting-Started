function showMessage(message){
	document.getElementById('message').textContent = message;
}


// if()
/*if(true){
	showMessage("true");
}*/
/*if(1===2){
	showMessage("false");
}*/
/*if(1===1){
	showMessage("true");
}*/
/*let price =20;
if(price === 20){
	showMessage(price);
}*/
/*let price = 20;
if(price !== 15){
	showMessage("discounted");
}*/
/*let price = 20;
if(price >= 15){
	showMessage("discounted");
}*/


// Truthy & Falsy
/*if("0"){
	showMessage("true");
}*/
/*if(0){
	showMessage("true");
}*/
/*if(1.1 + 1.3 !== 2.4){
	showMessage("true");
}*/
/*if( +(1.1 + 1.3).toFixed(2) === 2.4){
	showMessage("true");
}*/
/*if( +(1.1 + 1.3).toFixed(2) === 2.4){
	let message = 'hello';
	showMessage(message);
}*/


// if_else
/*if(true){
	showMessage("true");
}
else{
	showMessage("false");
}*/
/*if(false){
	showMessage("true");
}
else{
	showMessage("false");
}*/
/*let price = 20;
if(price>10){
	showMessage("true");
}
else{
	showMessage("false");
}*/
/*let price = 4;
if(price>10){
	showMessage("true");
}
else if(price<5){
	showMessage("price less than 5");
}*/
/*let price = 4;
if(price>10)
	showMessage("true");
else if(price<5)
	showMessage("price less than 5");*/
/*let price = 7;
if(price>10){
	showMessage("true");
}
else if(price>5){
	showMessage("price > 5");
}
else if(price<5){
	showMessage("price less than 5");
}*/


// === && == 
/*if(1==="1"){
	showMessage("true");
}
else{
	showMessage("false");
}*/
/*if(1=="1"){
	showMessage("true");
}
else{
	showMessage("false");
}*/


//Ternary Operator
/*let price = 20;
(price > 10) ? showMessage('yes') : showMessage('No');*/
/*let price = 20;
price < 10 ? showMessage('yes') : showMessage('No');*/
/*let price = 20;
let message = (price > 10) ? 'yes' : 'No';
showMessage(message);*/ 


// Block Scope Usine let
/*if(true){
	let value = "yes";
	showMessage(value);
}
console.log(value);*/
/*if(true){
	const value = "yes";
	showMessage(value);
}
console.log(value);*/


// Looping with for
/*for(let i=0; i<5; i++){
	console.log(i);
}*/
/*for(let i=0; i<=5; i++){
	console.log(i);
}*/


// While loop
/*let i =4;
while(i>0){
	console.log(i);
	i--;
}*/


// do...while
/*let i =4;
do{
	console.log(i);
	i--;
} while(i>0);*/
let i = -4;
do{
	console.log(i);
	i--;
} while(i>0);