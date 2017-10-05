// var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// Array.prototype.randomElement = function () {
//     return this[Math.floor(Math.random() * this.length)]
// }

// var playerOne;
// var playerTwo;

// function createDecks() {
//     var counter = 0;
//     var hold = 0;
//     for (var i = 0; i < myArray.length; i++) {
//         if (!counter) {
//             hold = myArray.splice(myArray.randomElement(), 1)
//             playerOne.push(hold);
//             counter = 1;
//         } else {
//             hold = myArray.splice(myArray.randomElement(), 1)
//             playerTwo.push(hold);
//             counter = 0;
//         }
//     }
// }

// createDecks(); 