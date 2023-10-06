const cardsColor = ['red', 'red', 'blue', 'blue', 'yellow', 'yellow', 'violet', 'violet', 'brown', 'brown', 'cadetblue', 'cadetblue', 'green', 'green', 'gray', 'gray', 'lightgreen', 'lightgreen'];

const cards = [...document.querySelectorAll('div')];


const init = () => {
    cards.forEach(card => {
        const position = Math.floor(Math.random() * cardsColor.length);
        card.classList.add(cardsColor[position]);
        cardsColor.splice(position,1);
    });

    setTimeout(() => {
        cards.forEach(card => {
            card.classList.add('hidden');
            card.addEventListener('click', clickCard);
    });
    },2000);
};

const clickCard = () => {
    console.log('click');
};

init();