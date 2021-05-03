console.log('Lodash is loaded:', typeof _ !== 'undefined');

// create standard 52-card deck object
var standard52 = [['ace', 'clubs'], [2, 'clubs'], [3, 'clubs'], [4, 'clubs'], [5, 'clubs'],
  [6, 'clubs'], [7, 'clubs'], [8, 'clubs'], [9, 'clubs'], [10, 'clubs'], ['vallet', 'clubs'],
  ['queen', 'clubs'], ['king', 'clubs'], ['ace', 'diamonds'], [2, 'diamonds'], [3, 'diamonds'],
  [4, 'diamonds'], [5, 'diamonds'], [6, 'diamonds'], [7, 'diamonds'], [8, 'diamonds'],
  [9, 'diamonds'], [10, 'diamonds'], ['vallet', 'diamonds'], ['queen', 'diamonds'],
  ['king', 'diamonds'], ['ace', 'hearts'], [2, 'hearts'], [3, 'hearts'],
  [4, 'hearts'], [5, 'hearts'], [6, 'hearts'], [7, 'hearts'], [8, 'hearts'],
  [9, 'hearts'], [10, 'hearts'], ['vallet', 'hearts'], ['queen', 'hearts'],
  ['king', 'hearts'], ['ace', 'spades'], [2, 'spades'], [3, 'spades'],
  [4, 'spades'], [5, 'spades'], [6, 'spades'], [7, 'spades'], [8, 'spades'],
  [9, 'spades'], [10, 'spades'], ['vallet', 'spades'], ['queen', 'spades'],
  ['king', 'spades']];

// create object of players
var players = [
  { name: 'Jerry SeinFeld', cards: [], total: 0 },
  { name: 'Cosmo Kramer', cards: [], total: 0 },
  { name: 'Elaine Benes', cards: [], total: 0 },
  { name: 'George Contanza', cards: [], total: 0 }
];

// create result object
var finalResult = [];

// function to calculate total points of each players
function points(card1, card2) {
  if (card1 === 'ace') card1 = '11';
  if (card1 === 'vallet' || card1 === 'queen' || card1 === 'king') card1 = '10';
  if (card2 === 'ace') card2 = '11';
  if (card2 === 'vallet' || card2 === 'queen' || card2 === 'king') card2 = '10';
  return parseInt(card1) + parseInt(card2);
}

// function to show players' hand
function showResults(arrayOfPlayers) {
  var results = '';
  console.log('SHOW YOUR HANDS!');
  for (var h = 0; h < arrayOfPlayers.length; h++) {
    results = 'PLAYER: ' + arrayOfPlayers[h].name + ' CARD 1: ' + arrayOfPlayers[h].cards[0][0] +
    ' of ' + arrayOfPlayers[h].cards[0][1] + ' CARD 2: ' + arrayOfPlayers[h].cards[1][0] +
    ' of ' + arrayOfPlayers[h].cards[1][1];
    arrayOfPlayers[h].total = points(arrayOfPlayers[h].cards[1][0], arrayOfPlayers[h].cards[0][0]);
    results = results + ' TOTAL POINTS: ' + arrayOfPlayers[h].total;
    console.log(results);
  }

}
// function to determine the winner or winners
function winner(arrayOfPlayers) {
  var firstPlace = arrayOfPlayers[0].total;
  for (var i = 1; i < arrayOfPlayers.length; i++) {
    if (firstPlace < arrayOfPlayers[i].total) {
      firstPlace = arrayOfPlayers[i].total;
    }
  }
  for (i = 0; i < arrayOfPlayers.length; i++) {
    if (firstPlace === arrayOfPlayers[i].total) {
      finalResult.push(arrayOfPlayers[i]);
    }
  }
  return finalResult;
}

// function game
function game(arrayOfPlayers, cards, arrayOfCards) {
  // message to begin the game
  console.log('WELCOME TO THE GAME OF CARDS');
  alert('DEALING CARDS ...');
  // create variables
  var card = 0;
  var givenCards = [];
  // iterate over players
  for (var p = 0; p < arrayOfPlayers.length; p++) {
    // iterate over cards for each player
    for (var c = 0; c < cards; c++) {
      // deal cards randomicaly
      card = Math.floor(Math.random() * (51 - 0)) + 0;
      // check if card has been dealt to a player already
      if (givenCards.includes(card)) {
        c--;
      }
      // push cards to players' object
      arrayOfPlayers[p].cards.push(arrayOfCards[card]);
    }
    // push card to object givenCards
    givenCards.push(card);
  }
  showResults(arrayOfPlayers);
  finalResult = winner(arrayOfPlayers);
  console.log('WINNER(S)');
  for (var i = 0; i < finalResult.length; i++) {
    console.log(finalResult[i].name);
    console.log(finalResult[i].total);
  }
  return finalResult;
}

// MAIN CODE
// Calling main function
var playingGames = game(players, 2, standard52);
// if returning value has 2 winners
if (playingGames.length > 1) {
  // clean data in object players
  for (var i = 0; i < players.length; i++) {
    players[i].cards = [];
    players[i].total = 0;
  }
  // transfer data from finalResult to players
  players = finalResult;
  // clear data from finalResult
  finalResult = [];
  // call main function once again
  playingGames = game(players, 2, standard52);
}
