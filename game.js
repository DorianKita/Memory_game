const cardsColor = ['red', 'red', 'blue', 'blue', 'yellow', 'yellow', 'violet', 'violet', 'brown', 'brown', 'cadetblue', 'cadetblue', 'green', 'green', 'gray', 'gray', 'lightgreen', 'lightgreen'];

const cards = [...document.querySelectorAll('div')];
const startTime = new Date().getTime();

let activeCard = '';
const activeCards = [];

const gamePairs = cards.length/2;
let gameResult = 0;

//functions
const clickCard = function() {
    activeCard = this;
    activeCard.classList.remove('hidden');

    if(activeCards.length === 0) {
        activeCards[0] = activeCard;
        return;
    } else {
        cards.forEach(card => card.removeEventListener('click', clickCard));
        activeCards[1] = activeCard;

        setTimeout(() => {
            if(activeCards[0].className === activeCards[1].className){
                activeCards.forEach( card => card.classList.add('off'));
                gameResult++;
                if(gameResult === gamePairs) {
                    const endTime = new Date().getTime();
                    alert(`Congratulations You Won!!! (${(endTime - startTime) / 1000})s.`);
                    //refresh page
                    location.reload();
                }
            } else {
                activeCards.forEach( card => card.classList.add('hidden'));
            }
            activeCard = '';
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener('click', clickCard));
    },1000);
    }
};

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



init();