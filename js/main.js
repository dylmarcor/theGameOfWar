var startDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

var playerOne = [];
var playerTwo = [];

function createDeck() {
    var holder = [];
    for (var i = 0; i < startDeck.length; i++) {
        holder.push(startDeck.randomElement());
    }
    playerOne = holder.splice(0, 26);
    playerTwo = holder;
}

function battle(holder) {
    checkWinner();
    var p1 = playerOne.shift();
    var p2 = playerTwo.shift();
    if (p1 === p2) {
        var holder = goToWar(p1, p2);
        console.log(holder)
    } else if (p1 > p2) {
        playerOne.push(p1)
        playerOne.push(p2)
        if (holder) playerOne = playerOne.concat(holder)
    } else {
        playerTwo.push(p1)
        playerTwo.push(p2)
        if (holder) playerTwo = playerTwo.concat(holder)
    }
}


function goToWar(p1, p2) {
    var holder = [p1, p2];
    new Array(3).fill(null).forEach(() => holder.push(playerOne.shift()))
    new Array(3).fill(null).forEach(() => holder.push(playerTwo.shift()))
    battle(holder);
    return holder;
}

function checkWinner() {
    if (playerOne === []) {
        return 2;
        console.log("Player 1 wins")
    } else if (playerTwo === []) {
        return 1;
        console.log("Player 2 wins")
    } else {
        return 0;
    }
}

function init() {
    createDeck();
}

init();
