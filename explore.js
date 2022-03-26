const randomBtn = document.querySelector('#random-btn')

randomBtn.addEventListener('click', () => {
    const randomActivity = ['Cochon', 'Gris-Gris', 'Commanders Palace', 'GW Fins', 'Restaurant Rebirth', 'Peche', 'Restaurant August'];
    const random = Math.floor(Math.random() * randomActivity.length);
    alert(random, randomActivity[random]);
})



