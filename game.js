const cardsColor = ['red', 'red', 'blue', 'blue', 'yellow', 'yellow', 'violet', 'violet', 'brown', 'brown', 'cadetblue', 'cadetblue', 'green', 'green', 'gray', 'gray', 'lightgreen', 'lightgreen'];

const cards = [...document.querySelectorAll('div')];


const init = () => {
cards.forEach(card => {
    const position = Math.floor(Math.random() * cardsColor.length);
    card.classList.add(cardsColor[position]);
});
};

init();