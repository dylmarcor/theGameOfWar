var cat = "cat"

// $(function() {

var startDeck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

$('#reset').on('click', resetBoard)
$('#draw').on('click', battle)

$('.enter').click(function() {
    $(this).parent().fadeOut(2000);
})

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
                $('#draw').prop('disabled', true)
                p1WinCounter++;
                render();
            } else {
                $('#draw').prop('disabled', true)
                p2WinCounter++;
                render();
            }
        }
    } else if (p1 > p2) {
        if (warChest.length > 0) { playerOne = playerOne.concat(warChest) }
        playerOne.push(p1)
        playerOne.push(p2)
        warChest = [];
        $('.right-player').delay(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).animate({opacity: 0})
        checkWinner();
    } else { 
        if (warChest.length > 0) { playerTwo = playerTwo.concat(warChest) }
        playerTwo.push(p1)
        playerTwo.push(p2)
        warChest = [];
        $('.left-player').delay(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).animate({opacity: 0})
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
        $('#draw').prop('disabled', true)
        console.log("Player 2 wins!")
        p2WinCounter++;
        render();
        return 1;
    } else if (playerTwo.length === 0) {
        $('#draw').prop('disabled', true)
        p1WinCounter++;
        render();
        console.log("Player 1 wins!")
        return 2;
    } else {
        return 0;
    }
}

function render() {
    if (playerOne[0] === playerTwo[0]) {
        $('.battefield').html("GO TO WAR!!!");
    }
    if (playerOne[0] === 14) {
        $('.left-player').text('A').animate({opacity: 100});
    } else if (playerOne[0] === 13) {
        $('.left-player').text('K').animate({opacity: 100});
    } else if (playerOne[0] === 12) {
        $('.left-player').text('Q').animate({opacity: 100});
    } else if (playerOne[0] === 11) {
        $('.left-player').text('J').animate({opacity: 100});
    } else {
        $('.left-player').text(playerOne[0]).animate({opacity: 100})
    }
    if (playerTwo[0] === 14) {
        $('.right-player').text('A').animate({opacity: 100});
    } else if (playerTwo[0] === 13) {
        $('.right-player').text('K').animate({opacity: 100});
    } else if (playerTwo[0] === 12) {
        $('.right-player').text('Q').animate({opacity: 100});
    } else if (playerTwo[0] === 11) {
        $('.right-player').text('J').animate({opacity: 100});
    } else {
        $('.right-player').text(playerTwo[0]).animate({opacity: 100})
    }
    if (playerOne.length <= 0) {
        $('.display').text('Player Two WINS!')
    }
    if (playerTwo.length <= 0) {
        $('.display').text('Player One WINS!')
    }
    $('.right-deck').html('Deck:<br>' + playerTwo.length)
    $('.left-deck').html('Deck:<br>' + playerOne.length)
    $('#p1win').html(parseInt(p1WinCounter))
    $('#p2win').html(parseInt(p2WinCounter))
    
    

}

function renderBoard() {
    $('.left-player').text(' ');
    $('.right-player').text(' ');
}

function resetBoard() {
    playerOne = [];
    playerTwo = [];
    warChest = [];
    $('#draw').prop('disabled', false)
    init();
    render();
    renderBoard();
}

function init() {
    createDeck()
}

init()
// })