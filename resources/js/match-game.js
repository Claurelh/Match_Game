var MatchGame = function{};

var MatchGame.generateCardValues = function() {
  var Numbers = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8","8"];
  for (var i = 1; i < 9; i++) {
    order.push(i);
    for (var c = 1; c < 2; c++) {
      order.push(i);
    }
  }
  let stop = order.length;
  console.log(order);
  var random = [];
  while (stop > 0) {
    var index = Math.round(Math.random());
    random.push(order[index]);
    order.slice(index,1);
    stop--;
  }
  console.log(random);
};
/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

// original array
var Numbers = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8","8"];

(function)(){
  //var Numbers2 = ["2", "6", "4", "8", "1", "3", "7", "5", "8", "6", "7", "2", "1", "4", "3", "5"];

}

.generateCardValues()

$(document).ready(function() {






});

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {

};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
