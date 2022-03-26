console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let happyDuck = document.querySelector('#duckPic');

happyDuck.addEventListener('mouseover', () => {
	alert('Look at you, crushing this assessment!')
});