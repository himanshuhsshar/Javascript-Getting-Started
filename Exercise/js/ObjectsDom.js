function showMessage(message){
	document.getElementById('message').textContent = message;
}

/*let person = {
	name: 'John',
	age: 32,
	partTime: false
};
showMessage(person.name);*/
/*let person = {
	name: 'John',
	age: 32,
	partTime: false
};
showMessage(person.country);*/
/*let person = {
	name: 'John',
	age: 32,
	partTime: false
};
person.age = 33;
showMessage(person.age);*/
/*let person = {
	name: 'John',
	age: 32,
	partTime: false
};
person.age = 35;
showMessage(person['age']);*/
/*let person = {
	name: 'John',
	age: 32,
	partTime: false
};
person['age'] = 55;
showMessage(person.age);*/




//Object Methods
/*let person = {
	name: 'John',
	age: 32,
	partTime: false,
	showInfo: function(){
		showMessage('in showInfo');
	}
};
person.showInfo();*/
/*let person = {
	name: 'John',
	age: 32,
	partTime: false,
	showInfo: function(){
		showMessage(this.name + ' is ' + this.age);
	}
};
person.showInfo();*/
/*let person = {
	name: 'John',
	age: 32,
	partTime: false,
	showInfo: function(realAge){
		showMessage(this.name + ' is ' + this.age + ' real age ' + realAge);
	}
};
person.showInfo(34);*/




// Passing Objects to Functions
/*let message = 'Hello';
function changeMessage(message) {
    message = 'Hi';
}
changeMessage(message);
showMessage(message);*/
/*let person = {
	name: 'John',
	age: 32,
	partTime: false
};
function incrementAge(p) {
    p.age++;
}
incrementAge(person);
showMessage(person.age);*/



// Standard built-in objects
/*let now = new Date();
showMessage( now.toDateString() );*/
//showMessage( Math.abs(-42) );
//showMessage( Math.random() );
/*let s ='Hello';
showMessage(s.charAt(0));*/


//  DOM(Document Object Model)




// Styling Dom Elements
const header = document.getElementById('message');
header.style.color = '#fff000';
header.style.fontWeight = '800';


// Detecting Button Clicks
/*const button = document.getElementById('see-review');
button.addEventListener('click', function(){
	console.log('click');
});*/



// Showing and Hiding DOM Elements
const button = document.getElementById('see-review');
button.addEventListener('click', function(){
	const review = document.getElementById('review');
	if(review.classList.contains('d-none')) {
		review.classList.remove('d-none');
		button.textContent = 'CLOSE REVIEW';
	}
	else {
		review.classList.add('d-none');
		button.textContent = 'SEE REVIEW';
	}
		
});