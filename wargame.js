var cards = [];
var players;

class Player {
    constructor() {
        this.playerCards = [];
        this.points = 0;
    }
}


class Card {
    constructor(suit, value, number) {
        this.suit = suit; 
        this.value = value;  
        this.number = number;
    }
}

class Deck {
    constructor() {
        this.allCards;
        this.shuffleCards;
    } 

    allCards() {
        var numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9','10', 'J', 'Q', 'K' ];
        var suits = ['Diamond', 'Heart', 'Spade', 'Club'];
            for(let i = 0; i < numbers.length; i++){
            for(let j = 0; j < suits.length; j++) {
                let hand = cards(numbers[i], suits[j]);
                this.cards.push(hand);
            }
        }
    }

    shuffleCards() {
        for(let i = allCards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = allCards[i];
            cards[i] = allCards[j];
            cards[j] = temp;
        }
    }
}
    
    dealHand() {
        this.players[0].playerCards = this.deck.cards.slice(0, 26);
        this.players[1].playerCards = this.deck.cards.slice(26, 52);     
    }

    class Play{
        constructor(){      
            this.deck.makeDeck();
            this.deck.shuffleDeck();
            this.dealHand();

        
        for(let i = 0; i < this.players[0].playerCards.length; i++){
            console.log(`The first player got a ${this.players[0].playerCards[i].numbers} of ${this.players[0].playerCards[i].suit}`);
            console.log(`${this.players[1]} drew the ${this.players[1].playerCards[i].value} of ${this.players[1].playerCards[i].suit}`);
            if(this.players[0].playerCards[i].value > this.players[1].playerCards[i].value){
                this.players[0].points++;
                console.log("The First Player Won.");
            } else if(this.players[1].playerCards[i].numbers> this.players[0].playerCards[i].value){
                this.players[1].points++;
                console.log("The Second Player Won.");
            } else {
                console.log("Both Players Tied");            
            }

     if(this.players[0].points > this.players[1].points){
            console.log("The First Player is the winner of the game");
        } else if(this.players[0].points < this.players[1].points{
            console.log("The Second Player is the winner of the game");
        } else {
            console.log("It is a cat's game");
        }
    }
        }
    }