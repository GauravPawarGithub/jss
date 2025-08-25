//35.Create a Show/Hide Password Toggle

const button = document.querySelector('button');
const inputPassword = document.querySelector('#password')

button.addEventListener('click', ()=>{
    let PasswordType = inputPassword.type; //storing current type of input password
    inputPassword.type = PasswordType === 'password' ? 'text' : 'password';
    button.innerText = PasswordType === 'password'? 'hide' : 'show';
})