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
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password must not be empty');
    } else if(!isValidPassword(passwordValue)) {
        setError(password, 'Password needs letters and numbers');
    } else {
        setSuccess(password);
    }
};
// button.addEventListener('click', sendData);
// utility functions
form.addEventListener('submit', function(e){
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
    e.preventDefault()
    if(emailValue == false || email == '' || passwordValue == false || password == ''){
        fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(resp) {
            alert('Please provide the correct data without empty fields');
        })
        .catch(function(err){
            console.log('ERROR')
        })
    } else if(emailValue != 'rose@radiumrocket.com' || passwordValue !='basp2022') {
        fetch(url)
        .then(function(res) {
            return res.json()
        })
        .then(function(res) {
            alert('Email or password incorrect')
        })  
    } else {
        fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then (function(res){
            alert('You have succesfully login!')
        })
        .catch(function(err){
            console.log('ERROR')
        })
    }

});

// const sendHttpRequest = (method, url, data) => {
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(data),
//         headers: data ? {'Content-type' : 'application/json'} : {}
//     }).then(response => {
//         if(response.status >= 400) {
//             response.json().then(errResData => {
//                 const error = new Error('Something went wrong!');
//                 error.data = errResData;
//                 throw error;
//             });
//         }
//         return response.json();
//     });
// };

// const getData = () => {
//     sendHttpRequest('GET', 'https://basp-m2022-api-rest-server.herokuapp.com/login')
//     .then(responseData => {
//         console.log(responseData);
//     });
// };

// const sendData = () => {
//     sendHttpRequest('POST', 'https://basp-m2022-api-rest-server.herokuapp.com/login', {
//         email: 'rose@radiumrocket.com',
//         password: 'basp2022'
//     }).then(responseData => {
//         console.log(responseData);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// };



// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     const formData = new FormData(this);

//     fetch('https://basp-m2022-api-rest-server.herokuapp.com/login', {
//         method: 'post',
//         body: formData
//     }).then(function(response) {
//         return response.json();
//     }).then(function (json) {
//         alert('success');
//     }).catch(function (error) {
//         alert.error('ERROR');
//     })
// })



// var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
// var params = new URLSearchParams(window.location.search);

