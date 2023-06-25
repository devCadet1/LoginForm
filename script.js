let signinBtn = document.getElementById('signinBtn')

let signupBtn = document.getElementById('signupBtn')
let title = document.getElementById('title')
let nameField = document.getElementById('name-field')

signinBtn.onclick = function () {
    nameField.style.maxHeight = '0'
    title.innerHTML = 'Sign In'
    signinBtn.classList.remove('disabled')
    signupBtn.classList.add('disabled')
}

signupBtn.onclick = function () {
    title.innerHTML = 'Sign Up';
    nameField.style.maxHeight = '65px'
    signupBtn.classList.remove('disabled')
    signinBtn.classList.add('disabled')
}