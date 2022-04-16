// a
var months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"];

    console.log(months[5], months[11]);

// b
months.sort();

console.log(months);

// c
months.unshift("firstElement");
months.push("lastElement");

console.log(months);

// d
months.shift();
months.pop();

console.log(months);

// e
months.reverse();

console.log(months);

// f

var newString = months.join("-");

console.log(newString);

// g
var months2 = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"];

console.log(months2.slice(4, 11));