// var cat = "cat"

// $(function() {

var startDeck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// var displayDeck = [".dA", ".dK", ".dQ", ".dJ", ".d10", ".d09", ".d08", ".d07", ".d06", ".d05", ".d04", ".d04", ".d03", ".d02",
//     ".hA", ".hK", ".hQ", ".hJ", ".h10", ".h09", ".h08", ".h07", ".h06", ".h05", ".h04", ".h04", ".h03", ".h02",
//     ".sA", ".sK", ".sQ", ".sJ", ".s10", ".s09", ".s08", ".s07", ".s06", ".s05", ".s04", ".s04", ".s03", ".s02",
//     ".cA", ".cK", ".cQ", ".cJ", ".c10", ".c09", ".c08", ".c07", ".c06", ".c05", ".c04", ".c04", ".c03", ".c02",]

// var startDeck = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

$('#reset').on('click', resetBoard)
$('#draw').on('click', battle)

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
                $('#draw').attr('disabled','disabled')
                p1WinCounter++;
                render();
            } else {
                console.log("Player 2 wins!");
                $('#draw').attr('disabled','disabled')
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
        $('#draw').prop('disabled', false)
        console.log("Player 2 wins!")
        p2WinCounter++;
        render();
        return 1;
    } else if (playerTwo.length === 0) {
        $('#draw').prop('disabled', false)
        p1WinCounter++;
        render();
        console.log("Player 1 wins!")
        return 2;
    } else {
        return 0;
    }
}

function render() {
    $('.right-deck').html(playerTwo.length)
    $('.left-deck').html(playerOne.length)
    $('.left-player').html(playerOne[0])
    $('.right-player').html(playerTwo[0])
    $('#p1win').html(parseInt(p1WinCounter))
    $('#p2win').html(parseInt(p2WinCounter))
}

function resetBoard() {
    console.log("Board Reset")
    playerOne = [];
    playerTwo = [];
    warChest = [];
    $('#draw').prop('disabled', false)
    init();
    render();
}

function init() {
    createDeck()
}

init()
// })