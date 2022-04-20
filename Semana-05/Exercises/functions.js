// a
console.log("Exercise 6-a/b");

function addition(num1, num2) {
    return num1 + num2;
}

var newVar= addition(2, 3);
console.log(newVar);

// b 
function addition(num1, num2) {
    if (isNaN(num1, num2)) {
        alert("ERROR");
        return NaN;
    } else {
        return num1 + num2;
    }
}

// c 
console.log("Exercise 6-c");

function intNum(num3) {
    if (Number.isInteger(num3)) {
        console.log(num3);
        return true;
    } else {
        console.log("not working");
        return false;
    }
}

intNum(2);

// d
console.log ("Exercise 6-d")

function addition(num1, num2) {
    if (isNaN(num1, num2)) {
        alert("ERROR");
        return NaN;
    } 
    if (!Number.isInteger(num1)) {
        alert("ERROR NOT INTEGER");
        num1 = Math.floor(num1);
    } 
    if (!Number.isInteger(num2)) {
        alert("ERROR NOT INTEGER");
        num1 = Math.floor(num2);
    } 
    return num1 + num2;
}

var var2 = addition(2.3, 4); // should be 6  
console.log(var2); 


// e
console.log("Exercise 6-e");

function intNumberVal(newNum1) {
    if (!Number.isInteger(newNum1)) {
        alert("ERROR NOT INTEGER");
    }
    return Math.floor(newNum1);
}

function additionNewVersion(num1, num2) {
    if (isNaN(num1, num2)) {
        alert("ERROR");
        return NaN;
    } 
    num1 = intNumberVal(num1);
    num2 = intNumberVal(num2);
    return num1 + num2;
}

var var2 = additionNewVersion(3.2, 4); // should be 7  
console.log(var2);

