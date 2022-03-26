const faveColor = document.querySelector('#color');
const favePlace = document.querySelector('#place');
const faveRitual = document.querySelector('#ritual');

faveColor.addEventListener('click', () => {
    alert('My favorite color is blue like the sky on a gorgeous day!')
});


favePlace.addEventListener('click', () => {
    alert(`You're in my favorite place. The INTERWEBZ!!!`)
});

faveRitual.addEventListener('click', () => {
    alert(`My favorite ritual is waking up! Be happy you've been given another day!`)
});