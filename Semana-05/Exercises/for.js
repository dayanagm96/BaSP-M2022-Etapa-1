// a and b
console.log("Exertcise 5-a/b");
var typesOfFood = [
    "italian",
    "chinese",
    "american",
    "mexican",
    "arab"
];


typesOfFood.forEach(function (element, index, array){
    alert(element.toUpperCase());
})

// c
console.log("Exertcise 5-c");
var sentence = " ";

for (var i = 0; i < typesOfFood.length; i++) {
    sentence += typesOfFood[i] + " ";
}
alert(sentence);

// d 
console.log("Exertcise 5-d");

var emptyArray = [];

for (var i = 0; i < 10; i++) {
    emptyArray += i;
} 
console.log(emptyArray);

