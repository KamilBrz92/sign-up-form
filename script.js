const firstName = document.querySelector('#name');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const nameSpan = document.querySelectorAll('.required-label');
const passwordFields = document.querySelectorAll('[type="password"]')

nameSpan.forEach(element => {
    element.textContent = "required";
    element.classList.add('label');
});

const testContainer = document.querySelector('#password-test');
const passwordMatch = document.createElement('p');
passwordMatch.classList.add('error-message');
passwordMatch.textContent = "* Passwords do not match!";

function checkElementValidity(element) {
    element.classList= "";
    if (element.checkValidity()) {
        console.log('valid');
        element.classList.add('valid');
    } else {
        console.log('invalid');
        element.classList.add('error');
    }
}

passwordFields.forEach(element => {
    element.addEventListener('keyup', () => {
        checkElementValidity(element);
    })
});

confirmPassword.addEventListener('blur', () => {
    if (password.value !== confirmPassword.value) {
        testContainer.appendChild(passwordMatch);
        passwordFields.forEach(element => {
            element.classList = "";
            element.classList.add('error');
        });
        console.log("NO MATCH!");
    } else if (password.value === confirmPassword.value) {
        console.log("ITS A MATCH!");
        passwordFields.forEach(element => {
            element.classList = "";
            element.classList.add('valid');
        });
        testContainer.removeChild(passwordMatch);
    }
})