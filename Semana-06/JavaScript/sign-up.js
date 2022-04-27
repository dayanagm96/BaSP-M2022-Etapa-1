console.log("working");
var firstName = document.getElementById('name');
var lastName = document.getElementById('last-name');
var idNumber = document.getElementById('id-number');
var dateBirth = document.getElementById('date-birth');
var phoneNumber = document.getElementById('phone-num');
var address = document.getElementById('address');
var userLocation = document.getElementById('location');
var zipCode = document.getElementById('zip-code');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirm-password');
var button = document.getElementById('btn');
// characters
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var others = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-","."];
// form
var form = document.getElementById('form-input');
// validation colors
var red = '#F44336';
var green = '#4CAF50';

// alert
form.addEventListener('click', function(event){
    event.preventDefault();
    if(
        validateFirstName() &&
        validateLastName() &&
        validateIdNumber() &&
        validateDateBirth() &&
        validatePhoneNumber() &&
        validateAddress() &&
        validateLocation() &&
        validateZipCode() &&
        validateEmail() &&
        validatePassword() &&
        validateConfirmPassword()
    ) {
        alert('First Name: ' + firstName.value + '\n'
         + 'Last Name: ' + lastName.value + '\n'
         + 'ID Number: ' + idNumber.value + '\n'
         + 'Date of Birth: ' + dateBirth.value + '\n'
         + 'Phone Number: ' + phoneNumber.value + '\n'
         + 'Address: ' + address.value + '\n'
         + 'Location: ' + userLocation.value + '\n'
         + 'Zip Code: ' + zipCode.value + '\n'
         + 'Email: ' + email.value + '\n'
         + 'Password: ' + password.value + '\n'
         + 'Confirmation password ' + confirmPassword + '\n')
    }
});

// validations
function validateFirstName() {
    if(checkIfEmpty(firstName)) return;
    if(!checkIfOnlyLetters(firstName)) return;
    return true;
}

function validateLastName() {
    if(checkIfEmpty(lastName)) return;
    if(!checkIfOnlyLetters(lastName)) return;
    return true;
}

function validateIdNumber() {
    if(checkIfEmpty(idNumber)) return;
    if(!checkIfOnlyNumbers(idNumber)) return;
    return true;
}

function validateDateBirth() {
    if(checkIfEmpty(dateBirth)) return;
    return true;
}

function validatePhoneNumber() {
    if(checkIfEmpty(phoneNumber)) return;
    if(!checkPhone(phoneNumber)) return;
    return true;
}

function validateAddress() {
    if(checkIfEmpty(address)) return;
    if(!checkingAddress(address)) return;
    return true;
}

function validateLocation() {
    if(checkIfEmpty(userLocation)) return;
    if(!checkingLocation(userLocation)) return;
    return true;
}

function validateZipCode() {
    if(checkIfEmpty(zipCode)) return;
    if(!checkIfOnlyNumbersZip(zipCode)) return;
    if(!meetLenght(zipCode)) return;
    return true;
}

function validateEmail() {
    if(checkIfEmpty(email)) return;
    if(!checkEmail(email)) return;
    return true;
}

function validatePassword() {
    if(checkIfEmpty(password)) return;
    if(!passwordLength(password)) return;
    if(!checkForCharacters(password)) return; 
    return true;
}

function validateConfirmPassword() {
    if(password.className !== 'valid') {
        setInvalid(confirmPassword, 'Password must be valid');
        return;
    } 
    if(password.value !== confirmPassword.value) {
        setInvalid(confirmPassword, 'Passwords must match');
        return;
    } else {
        setValid(confirmPassword);
    }
}

// checking if the input is empty
function checkIfEmpty(field) {
    if(isEmpty(field.value.trim())){
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    } else{
        setValid(field);
        return false;
    }
}

function isEmpty(value) {
    if(value === '') return true;
    return false;
}

// funtions for validity 
function setInvalid(field, message) {
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field) {
    field.className = 'valid';
    field.nextElementSibling.innerHTML = '';
    // field.nextElementSibling.style.color = green;
}

// checking for only letters
function checkIfOnlyLetters(field) {
    var letterCount = 0;
    var numberCount = 0;
    var otherCount = 0;
    
    var filler = field.value;

    for(i = 0; i < filler.length; i++) {
        var newFiller = filler[i];
        if(letters.indexOf(newFiller) !=-1) {
            letterCount++;
            
        } else if(numbers.indexOf(newFiller) !=-1) {
            numberCount++;
        } else if (others.indexOf(newFiller)!=-1) {
            otherCount++;
        }
    }

    if(letterCount >=3 && numberCount == 0 && otherCount == 0) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only letters(3 characters min)`);
        return false;
    }

};

// checking for only numbers
function checkIfOnlyNumbers(field) {
    var letterCount = 0;
    var numberCount = 0;
    var otherCount = 0;

    var filler = field.value;

    for(i = 0; i < filler.length; i++) {
        var newFiller = filler[i];
        if(letters.indexOf(newFiller) !=-1) {
            letterCount++;
            
        } else if(numbers.indexOf(newFiller) !=-1) {
            numberCount++;
        } else if (others.indexOf(newFiller)!=-1) {
            otherCount++;
        }
    }

    if(numberCount >= 7 && letterCount == 0 && otherCount == 0) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only numbers(at leat 7)`)
        return false;
    }
};

// checking phone
function checkPhone(field) {
    var letterCount = 0;
    var numberCount = 0;
    var otherCount = 0;

    var filler = field.value;

    for(i = 0; i < filler.length; i++) {
        var newFiller = filler[i];
        if(letters.indexOf(newFiller) !=-1) {
            letterCount++;
            
        } else if(numbers.indexOf(newFiller) !=-1) {
            numberCount++;
        } else if (others.indexOf(newFiller)!=-1) {
            otherCount++;
        }
    }

    if(numberCount >= 10 && letterCount == 0 && otherCount == 0) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only numbers(at leat 10)`)
        return false;
    }
};


// checking for address 
function checkingAddress(field) {
    var letterCount = 0;
    var numberCount = 0;
    var otherCount = 0;

    var filler = field.value;

    for(i = 0; i < filler.length; i++) {
        var newFiller = filler[i];
        if(letters.indexOf(newFiller) !=-1) {
            letterCount++;
            
        } else if(numbers.indexOf(newFiller) !=-1) {
            numberCount++;
        } else if (others.indexOf(newFiller)!=-1) {
            otherCount++;
        }
    }

    var charactersCount = letterCount + numberCount;

    if(otherCount > 0 || filler.indexOf(" ") < 0) {
        setInvalid(field, `${field.name} must have an space`);
        return false;
    } else if (charactersCount < 5) {
        setInvalid(field, `${field.name} must have a combination of letters and numbers (at least 5)`);
        return false;
    } else{
        setValid(field);
        return true;
    }


};

// checking location
function checkingLocation(field) {
    var letterCount = 0;
    var numberCount = 0;
    var otherCount = 0;

    var filler = field.value;

    for(i = 0; i < filler.length; i++) {
        var newFiller = filler[i];
        if(letters.indexOf(newFiller) !=-1) {
            letterCount++;
            
        } else if(numbers.indexOf(newFiller) !=-1) {
            numberCount++;
        } else if (others.indexOf(newFiller)!=-1) {
            otherCount++;
        }
    }

    var charactersCount = letterCount + numberCount;
    if(charactersCount >= 4 && otherCount == 0) {
        setValid(field);
        return true;
    }  else {
        setInvalid(field, `${field.name} must have only letters and numbers(min 4 charaters)`);
        return false;
    }
};

// checking zip code length
function meetLenght(field) {
    if(field.value.length == 4 || field.value.length == 5) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must be between 4 and 5 characters only`);
        return false;
    }

};

// checking zip code
function checkIfOnlyNumbersZip(field) {
    var letterCount = 0;
    var numberCount = 0;
    var otherCount = 0;

    var filler = field.value;

    for(i = 0; i < filler.length; i++) {
        var newFiller = filler[i];
        if(letters.indexOf(newFiller) !=-1) {
            letterCount++;
            
        } else if(numbers.indexOf(newFiller) !=-1) {
            numberCount++;
        } else if (others.indexOf(newFiller)!=-1) {
            otherCount++;
        }
    }

    if(numberCount > 0 && letterCount == 0 && otherCount == 0) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only numbers(between 4 to 5)`);
        return false;
    }
};

// check email
function checkEmail(field) {
    if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(field.value)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must be a valid address`);
        return false;
    }
};

// check password length

function passwordLength(field) {
    if(field.value.length >= 8) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must be at least 8 characters`)
    }
};

//check for letters and numbers
function checkForCharacters(field) {
    var letterCount = 0;
    var numberCount = 0;
    var otherCount = 0;

    var filler = field.value;

    for(i = 0; i < filler.length; i++) {
        var newFiller = filler[i];
        if(letters.indexOf(newFiller) !=-1) {
            letterCount++;
            
        } else if(numbers.indexOf(newFiller) !=-1) {
            numberCount++;
        } else if (others.indexOf(newFiller)!=-1) {
            otherCount++;
        }
    }

    if(numberCount > 0 && letterCount > 0 && otherCount == 0) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain at least one letter or number`);
        return false;
    }
};
