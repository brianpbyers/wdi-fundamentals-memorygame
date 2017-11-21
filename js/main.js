console.log("Up and running!");
var cards = [
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
}

];
var cardsInPlay = [];
var checkForMatch = function(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match! (" + cardsInPlay[0]+"s)");
		}else {
			alert("Sorry, try again.");
		}
	}
};
var flipCard = function(cardID){
	cardsInPlay.push(cards[cardID].rank);
	console.log("User flipped " + cards[cardID].rank + " of " + cards[cardID].suit + ".  Image: "+cards[cardID].cardImage);
	checkForMatch();
};
flipCard(0);
flipCard(2);