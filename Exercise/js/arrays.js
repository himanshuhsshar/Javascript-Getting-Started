function showMessage(message){
	document.getElementById('message').textContent = message;
}


// creating and initializing Arrays
/*const values = ['a','b','c'];
console.log(values);
console.log(typeof values);
console.log(Array.isArray(values));*/

//Accessing Array Items
/*const values = ['a','b','c'];
console.log(values[0]);
console.log(values[2]);
console.log(values[22]);
values[0] = 'aaa';
console.log(values[0]);*/


// Manipulating Arrays
/*const values = ['a','b','c'];
values.push('d');
console.log(values);*/
/*const values = ['a','b','c'];
values.push('d','e','f');
console.log(values);*/
/*const values = ['a','b','c'];
const last = values.pop();
console.log(values, last);*/
/*const values = ['a','b','c'];
const first = values.shift();
console.log(values, first);*/
/*const values = ['a','b','c'];
values.unshift('hello');
console.log(values);*/
/*const values = ['a','b','c'];
values.unshift('hello', 'world');
console.log(values);*/


// slice & splice
/*const values = ['a','b','c','d','e'];
const newValues = values.slice(1,4);
console.log(newValues);*/
/*const values = ['a','b','c','d','e'];
const newValues = values.slice();
console.log(newValues);
console.log(values);*/
/*const values = ['a','b','c','d','e'];
values.splice(1,1);
console.log(values);*/
/*const values = ['a','b','c','d','e'];
values.splice(1,2);
console.log(values);*/
/*const values = ['a','b','c','d','e'];
values.splice(2,0,'hello');
console.log(values);*/
/*const values = ['a','b','c','d','e'];
values.splice(2,1,'hello');
console.log(values);*/



// Array Searching and Looping
/*const values = ['a','b','c'];
console.log(values.indexOf('a'));
console.log(values.indexOf('c'));
console.log(values.indexOf('v'));*/
/*const values = ['a','b','c','d','z'];
const set = values.filter(function(item) {
	console.log('item: ', item);
	return item > 'b';
});
console.log(set);*/
/*const values = ['a','bbb','c'];
const found = values.find(function(item) {
	return item.length > 1;
});
console.log(found);*/
/*const values = ['a','bbb','cccc'];
const found = values.find(function(item) {
	return item.length > 1;
});
console.log(found);*/
/*const values = ['a','b','c'];
values.forEach(function(item) {
	console.log(item);
});*/


// Arrays in the DOM
const containers = document.getElementsByClassName('text-primary');
containers[1].classList.add('d-none');
containers[2].classList.add('d-none');
console.log(containers);

