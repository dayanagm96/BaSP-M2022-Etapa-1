// a
console.log("Exercise 3-a");

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
console.log("Exercise 3-b");

months.sort();

console.log(months);

// c
console.log("Exercise 3-c");

months.unshift("firstElement");
months.push("lastElement");

console.log(months);

// d
console.log("Exercise 3-d");

months.shift();
months.pop();

console.log(months);

// e
console.log("Exercise 3-e");

months.reverse();

console.log(months);

// f
console.log("Exercise 3-f");

var newString = months.join("-");

console.log(newString);

// g
console.log("Exercise 3-g");

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