class Card {
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }
}

class Deck {

    constructor() {
        this.cards = [];
    };

    get card() {
        return this.cards;
    }
    
    buildDeck() {
        this.populate();
        this.shuffle();
        return this.cards
    }

    populate() {

        const suits = ['Clubs','Diamonds','Hearts', 'Spades'];
        const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const values = [2,3,4,5,6,7,8,9,10,11,12,13,14];

        for (let i = 0; i < suits.length; i++) {
            for (let a = 0; a < ranks.length; a++) {
                this.cards.push(new Card(ranks[a],suits[i],values[a]));
            }
        }
    } 
    
    shuffle() {

        if (this.cards.length > 0) {

            const shuffledDeck = this.cards.sort(() => Math.random() - 0.5)
            this.cards = [...shuffledDeck];
        }
    }

}

class Player {

    constructor(name) {
        this.playerName = name
        this.playerScore = 0
        this.playerDeck = []  
    }

    get name() {
        return this.playerName
    }

    get deck() {
        return this.playerDeck
    }

    get score() {
        return this.playerScore
    }
    set deck(newDeck) {
        if (Array.isArray(newDeck)) {
            this.playerDeck = newDeck;
        }
    }

    set score(newScore) {
        if (newScore != isNaN) {
            this.playerScore = newScore;
        }
    }
}


class Game {

    constructor() {
        this.players = []
        this.deck = []
    }
    
         createGame() {
            
            
            this.players[0] = new Player(prompt ('Enter Name of Player 1'));
            this.players[1] = new Player('Computer');

            console.log(`$$$$$$$$$$$$$$     Hope that ${this.players[0].name} wins the Game!!!!!!      $$$$$$$$$$`)
    


            const cards = new Deck().buildDeck();
        
    
            this.players[0].deck = [...cards.slice(0,26)];
            this.players[1].deck = [...cards.slice(26,52)];
    
            console.log('$$$$$$$$$$$$$$$$$        Dealing hands to each player!!!     $$$$$$$$$$')
    
            for (let i = 0; i < this.players[0].deck.length; i++) {
                if (this.players[0].deck[i].value > this.players[1].deck[i].value) {
                this.players[0].score += 1;
                let winningHand =`${this.players[0].deck[i].rank} of ${this.players[0].deck[i].suit}`;
                console.log(`${this.players[0].name} has won with ${winningHand}`);
            
                }else {
                    this.players[1].score += 1;
                    let winningHand = `${this.players[1].deck[i].rank} of ${this.players[0].deck[i].suit}`;
                    console.log(`Computer has won with ${winningHand}`)
    
                }
            }
    
            console.log('$$$$$$$$$$$$$$$   Game has finished!         $$$$$$$$$$$$$$')
            if (this.players[0].score > this.players[1].score) {
                console.log(`${this.players[0].name.toUpperCase()} WON WAR with a score of ${this.players[0].score}`);
            }else if (this.players[0].score < this.players[1].score) {
                console.log(`${this.players[1].name.toUpperCase()} WON WAR with a score of ${this.players[1].score}`);
            }else {
                console.log(`${this.players[0].name.toUpperCase()} AND COMPUTER TIED!!!`)
            }
         }
    
    }
    
    const game = new Game();
    game.createGame()  