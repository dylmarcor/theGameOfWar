var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

var playerOne = [];
var playerTwo = [];
var newDeck = [];

function createDeck() {
    for (var i = 0; i < myArray.length; i++) {
        newDeck.push(myArray.randomElement());
    }
    playerOne = newDeck.splice(0, 26);
    playerTwo = newDeck.splice(0, 26);
}

createDeck();

function drawCards() {
    var playerOneMove, playerTwoMove;
    playerOneMove = playerOne.randomElement();
    console.log(playerOneMove);
}

drawCards();