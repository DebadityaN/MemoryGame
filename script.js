const cards = document.querySelectorAll('.card-inner');

var hasFlippedCard = false;
var firstCard, secondCard;
var lockBoard = false;

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('is-flipped')
        secondCard.classList.remove('is-flipped')
        lockBoard = false;
    }, 1000);
}

function shuffleCards() {
    cards.forEach(card => {
        var randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
}
shuffleCards();

function flipCard() {
    if (lockBoard) return
    if (this == firstCard) return

    this.classList.add('is-flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = this;

    } else {
        hasFlippedCard = false
        secondCard = this;
        
        var isMatch = firstCard.children[1].children[0].getAttribute('src') == secondCard.children[1].children[0].getAttribute('src');
        
        isMatch ? disableCards() : unflipCards() ;
    }
}


cards.forEach(card => card.addEventListener('click', flipCard));