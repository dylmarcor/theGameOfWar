// var startDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

var startDeck = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

var playerOne = [],
    playerTwo = [],
    holder = [];

function createDeck() {
    var hold = [];
    for (var i = 0; i < startDeck.length; i++) {
        hold.push(startDeck.randomElement());
    }
    playerOne = hold.splice(0, 8);
    playerTwo = hold;
}



function battle(holder) {
    checkWinner();
    var war;
    var p1 = playerOne.shift();
    var p2 = playerTwo.shift();
    if (p1 === p2) {
        if (playerOne.length > 2 && playerTwo.length > 2) {
            holder = [p1, p2];
//             if (holder) holder.push(goToWar(p1, p2))
            holder = holder.concat(goToWar(p1, p2));
//             holder = holder.reduce(function(a,b) {return a.concat(b)}, []);
            battle();
        } else {
            if (playerOne.length < 2) {
                console.log("Player 1 wins!");
            } else {
                console.log("Player 2 wins!");
            }
        }
            console.log(holder)
            war = holder.concat(holder);
    } else if (p1 > p2) {
        playerOne.push(p1)
        playerOne.push(p2)
        if (holder) {
            playerOne.push(holder);
//             playerOne = playerOne.reduce(function(a,b) {return a.concat(b), []});
            console.log(holder);
        }
    } else {
        playerTwo.push(p1)
        playerTwo.push(p2)
        if (holder) {
            playerTwo = playerTwo.concat(holder);
//             playerTwo = playerTwo.reduce(function(a,b) {return a.concat(b), []});
            console.log(holder);
        }
    }
}


function goToWar(p1, p2) {
    var warChest = [];
    new Array(1).fill(null).forEach( () => warChest.push(playerOne.shift()))
    new Array(1).fill(null).forEach( () => warChest.push(playerTwo.shift()))
    console.log(warChest);
    return warChest;
}


function checkWinner() {
    if (playerOne.length === 0) {
        console.log("Player 2 wins!")
        return 0;
    } else if (playerTwo.length === 0) {
        console.log("Player 1 wins!")
        return 1;
    } else {
        return 2;
    }
}

function init() {
    createDeck();
}

init();