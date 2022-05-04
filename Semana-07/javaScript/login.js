console.log('working');
// inputs
var form = document.getElementById('sign-up-form');
var email = document.getElementById('email');
var password = document.getElementById('password');
var button = document.getElementById('continue-btn');
// characters
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var others = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-","."];
// error/success messages
var setError = (element, message) => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

var setSuccess = element => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// validations
var isValidEmail = email => {
    var re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return re.test(String(email).toLowerCase());
};

var isValidPassword = password => {
    var letterCount = 0;
    var numberCount = 0;
    for (let i = 0; i < password.length; i++) {
        if (letters.includes(password[i].toLocaleLowerCase())) {
            letterCount++;
        } else {
            Number.isInteger(password[i]);
            numberCount++;
        }
    }

    if (letterCount <= 0 || numberCount <= 0 || password.indexOf(" ") > -1) {
       return false;
    } else {
        return true;
    }
};

var validateInputs = () => {
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    if(emailValue === '') {
        setError(email, 'Email must not be empty');
        emailV = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        emailV = false;
    } else {
        setSuccess(email);
        emailV = true;
    }

    if(passwordValue === '') {
        setError(password, 'Password must not be empty');
        passwordV = false;
    } else if(!isValidPassword(passwordValue)) {
        setError(password, 'Password needs letters and numbers');
        passwordV = false;
    } else {
        setSuccess(password);
        passwordV = true;
    }
};

// utility function
form.addEventListener('submit', function(e){
    const emailValue = email.value;
    const passwordValue = password.value;
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
    url = url + '?email=' + emailValue + '&password=' + passwordValue;
   
    e.preventDefault()

    if(emailValue == '' || passwordValue == '' || emailV == false || passwordV == false){
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            alert(res.errors[0].msg);
        })
    } 
    else{
            fetch(url) 
            .then(function(res) {
                return res.json();
            })
            .then(function(res){
                alert(res.msg);
            }) .catch(function(err){
                console.error(err);
                alert(response.statustext);
            })
        }
});

