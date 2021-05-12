const emailForm = document.querySelector('.email-form');
const emailInputField = document.querySelector('.input-container input');

emailForm.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function setError(input, message) {
    const formContainer = input.parentElement;
    const validateText = formContainer.querySelector('span');
    formContainer.className = 'input-container invalid';
    validateText.innerText = message;
}

function setSuccess(input, message) {
    const formContainer = input.parentElement;
    const validateText = formContainer.querySelector('span');
    formContainer.className = 'input-container valid';
    validateText.innerText = message;
    emailForm.reset();
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/.test(email);
}

function checkInput() {
    const emailValue = emailInputField.value.trim();

    if(emailValue == '') {
        setError(emailInputField, 'Please enter an email address');
    } else if(!isEmail(emailValue)) {
        setError(emailInputField, 'Please provide a valid email address');
    } else {
        setSuccess(emailInputField, 'Email address sent!');
    }
}