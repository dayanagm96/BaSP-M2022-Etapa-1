console.log('working');
var form = document.getElementById('sign-up-form');
var email = document.getElementById('email');
var password = document.getElementById('password');


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

var isValidEmail = email => {
    var re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return re.test(String(email).toLowerCase());
};

var isValidPassword = password => {
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var letras = 0;
    var nume = 0;
    for (let i = 0; i < password.length; i++) {
        if (letters.includes(password[i].toLocaleLowerCase())) {
            letras++;
        } else {
            Number.isInteger(password[i]);
            nume++;
        }
    }

    if (letras <= 0 || nume <= 0 || password.indexOf(" ") > -1) {
       return false;
    } else {
        return true;
    }
};


var validateInputs = () => {
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
        // document.form.email.focus();
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        // document.form.email.focus();
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if(!isValidPassword(passwordValue)) {
        setError(password, 'Password needs letters and number');
    } else {
        setSuccess(password);
    }

};
 

form.addEventListener('submit', e => {
    e.preventDefault();
    if(validateInputs()) {
    alert("Welcome back! " + "Email: " + emailValue + " Password: " + passwordValue);
    } else {
        alert("Email or password incorrect");
    }
});


//to focus:*//
//     var fieldsFocus = document.querySelector('input[type="password"]');
//     fieldsFocus.addEventListener('focus', (e) => {
//     e.target.style.backgroundColor = 'yellow';
// });


// pwd.addEventListener('blur', (e) => {
//     e.target.style.backgroundColor = '';
// });

// if(validateInputs() == true) {
//     form.onsubmit();
// } else {
//     alert("Cannot enter");
// }
