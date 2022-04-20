// a
console.log("Exercise 2-a");

var sentence = "this whole sentence should be uppercase";

console.log(sentence.toUpperCase());

// b
console.log("Exercise 2-b");

var sentence2 = "Messi is my favorite football player";
var firstFiveChar = sentence2.substring(0, 5);
var newSentence = firstFiveChar + " is the best player in the world";

console.log(newSentence);

// c
console.log("Exercise 2-c");

var sentence3 = "There is no better horror writer than Poe";
var lastThreeChar = sentence3.substring(38);
var newSentence2 = lastThreeChar + " was born in Boston";

console.log(newSentence2);

// d
console.log("Exercise 2-d");

var quote1 = "life is what happens when you're busy making other plans";
var firstChar = quote1.substring(0,1);
var capitalLetter = firstChar.toUpperCase();
var quote2 = " IS FOR LONDON";
var lowerQuote = quote2.toLowerCase();
var finalResult = capitalLetter + lowerQuote;

console.log(finalResult);

// e 
console.log("Exercise 2-e");

var sentence4 = "cats are the best";
var firstSpace = sentence4.indexOf(" ");

console.log(firstSpace);

// f
console.log("Exercise 2-f");

var longWords = "photojournalism electromagnetic";
var firstLetter = longWords.substring(0, 1);
var positionSecondLetter = longWords.indexOf("e");
var secondLetter = longWords.substring(16, 17);

var sentence5 = "STANDS FOR PHYSICAL EDUCATION";

var finalSentence = firstLetter.toUpperCase() + secondLetter.toUpperCase() + " " + sentence5.toLowerCase();
console.log(finalSentence);





