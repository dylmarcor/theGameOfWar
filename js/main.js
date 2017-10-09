var startDeck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// var startDeck = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

$('button').on('click', $('#reset'), resetBoard)
$('button').on('click', $('#draw'), battle)

var playerOne = [],
    playerTwo = [],
    warChest = [],
    p1WinCounter = 0,
    p2WinCounter = 0;

function createDeck() {
    var hold = [];
    for (var i = 0; i < startDeck.length; i++) {
        hold.push(startDeck.randomElement());
    }
    playerOne = hold.splice(0, 26);
    playerTwo = hold;
}



function battle() {
    checkWinner();
    render();
    var p1 = playerOne.shift();
    var p2 = playerTwo.shift();
    if (p1 === p2) {
        if (playerOne.length > 2 && playerTwo.length > 2) {
            goToWar(p1, p2);
        } else {
            if (playerOne.length > 2) {
                console.log("Player 1 wins!");
                p1WinCounter++;
                render();
            } else {
                console.log("Player 2 wins!");
                p2WinCounter++;
                render();
            }
        }
    } else if (p1 > p2) {
        if (warChest.length > 0) { playerOne = playerOne.concat(warChest) }
        playerOne.push(p1)
        playerOne.push(p2)
        warChest = [];
        checkWinner();
    } else {
        if (warChest.length > 0) { playerTwo = playerTwo.concat(warChest) }
        playerTwo.push(p1)
        playerTwo.push(p2)
        warChest = [];
        checkWinner();
    }
}


function goToWar(p1, p2) {
    warChest.push(p1);
    warChest.push(p2);
    new Array(3).fill(null).forEach(() => warChest.push(playerOne.shift()))
    new Array(3).fill(null).forEach(() => warChest.push(playerTwo.shift()))
    battle();
}


function checkWinner() {
    if (playerOne.length === 0) {
        console.log("Player 2 wins!")
        p1WinCounter++;
        render();
        return 0;
    } else if (playerTwo.length === 0) {
        p2WinCounter++;
        render();
        console.log("Player 1 wins!")
        return 1;
    } else {
        return 2;
    }
}

function render() {
    $('.left-player').html(playerOne[0])
    $('.right-player').html(playerTwo[0])
    $('.leftscore').html(parseInt(p1WinCounter))
    $('.rightscore').html(parseInt(p2WinCounter))
}

function resetBoard() {
    playerOne = [];
    playerTwo = [];
    warChest = [];
    createDeck();
}

function init() {
    createDeck();
    render();
}

init();