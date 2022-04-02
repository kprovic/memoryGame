const cardArr = [
    {
        name:'c#',
        img:'./img/c-logo.png'
    },
    {
        name:'c#',
        img:'./img/c-logo.png'
    },
    {
        name:'css',
        img:'./img/css-logo.png'
    },
    {
        name:'css',
        img:'./img/css-logo.png'
    },
    {
        name:'js',
        img:'./img/js-logo.png'
    },
    {
        name:'js',
        img:'./img/js-logo.png'
    },
    {
        name:'python',
        img:'./img/python-logo.png'
    },
    {
        name:'python',
        img:'./img/python-logo.png'
    },
    {
        name:'php',
        img:'./img/php-logo.png'
    },
    {
        name:'php',
        img:'./img/php-logo.png'
    },
    {
        name:'react',
        img:'./img/react-logo.png'
    },
    {
        name:'react',
        img:'./img/react-logo.png'
    },
    {
        name:'vue',
        img:'./img/vue-logo.png'
    },
    {
        name:'vue',
        img:'./img/vue-logo.png'
    },
    {
        name:'java',
        img:'./img/java-logo.png'
    },
    {
        name:'java',
        img:'./img/java-logo.png'
    },
]
// shuffle card array
function shuffle(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

let chosenCard = [];
let chosenCardId = [];
let cardWon = [];

//check for matches
function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const cardOne = chosenCardId[0];
    const cardTwo = chosenCardId[1];
    if (chosenCard[0]===chosenCard[1]) {
        cards[cardOne].setAttribute('class', 'none');
        cards[cardTwo].setAttribute('class', 'none');
        cardWon.push(chosenCard);
    } else {
        cards[cardOne].setAttribute('src', './img/black.jpg');
        cards[cardTwo].setAttribute('src', './img/black.jpg');
    }
    chosenCard = [];
    chosenCardId = [];
    if (cardWon.length===cardArr.length/2) {
        let div = document.createElement('div');
        div.classList.add('result');
        div.innerHTML = `Congratulation! You found them all!!`
        main.innerHTML = '';
        main.append(div); 
    }
}

//flip card
function flipCard() {
    let cardId = this.getAttribute('data-id');
    chosenCard.push(cardArr[cardId].name);
    chosenCardId.push(cardId);
    this.setAttribute('src', cardArr[cardId].img);
    if (chosenCard.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

//create board

const main = document.querySelector('main'); 
function createBoard() {
    const grid = document.createElement('div');
    main.append(grid);
    grid.setAttribute('id','container')
    for (let i = 0; i < cardArr.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', './img/black.jpg');
        card.setAttribute('data-id', i);
        card.classList.add('img-back');
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}



//start game
const startButton = document.querySelector('.button');
startButton.addEventListener('click', () => {
    shuffle(cardArr);
    startButton.style.display = 'none';
    createBoard();
    
})




