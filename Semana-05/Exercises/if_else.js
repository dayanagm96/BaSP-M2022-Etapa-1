// a

var randomNum = Math.random();

if (randomNum >= 0.5) {
    alert("Greater than 0.5");
} else {
    alert("Lower than 0.5");
}

// b
var age = 17;

if (age < 2) {
    alert("Baby");
} else if ((age > 2) && (age < 12)) {
    alert("Kid");
} else if ((age > 12) && (age < 19)) {
    alert("Teenager");
} else if ((age > 19) && (age < 30)) {
    alert("Young Adult");
} else if ((age > 30) && (age < 60)) {
    alert("Adult");
} else if ((age > 60) && (age < 75)) {
    alert("Elder Adult");
} else {
    alert("Elderly");
}