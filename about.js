console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successfully!');
}


let form = document.querySelector('form#contact');
let happyDuck = document.querySelector('#duckPic');

form.addEventListener('submit', handleSubmit);
happyDuck.addEventListener('mouseover', () => {
	alert('Look at you, crushing this assessment!')
});

