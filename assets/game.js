// // LOGIC OF GAME IN JAVASCRIPT //

const cards = document.querySelectorAll('.card');
// console.log(cards);

// // variables 

let isFlipped = false; // cannot use constant var in this instance, its not being referred to inside the function..
let firstCard, secondCard;

cards.forEach(card => {
    card.addEventListener('click', flip)
});

function flip() { // arrow functions do not have the 'this.' keyword  in their memory, so this always points to the global object.
    // console.log(this);
    this.classList.add('flip');
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
    } else {
        secondCard = this;
        // console.log(firstCard);
        // console.log(secondCard);
        function checkIt() {
            // console.log('Checking...');
            var checked = firstCard.dataset.image === secondCard.dataset.image;
            checked ? success() : failed();
        }
        checkIt();
    }
}

function success() {
    // console.log('Success!');
    firstCard.removeEventListener('click', flip);
    secondCard.removeEventListener('click', flip);
    reset();
}

function failed() {
    // console.log('Failed');
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        reset();
    }, 1000);
}

function reset() {
    isFlipped = false;
    firstCard, secondCard = null;
}

// // shuffle cards 

(function shuffle() {
    cards.forEach( card => {
        var index = Math.floor(Math.random() * 16);
        card.style.order = index;
    })
})();