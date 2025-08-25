//How would you handle form validation in real time and show error messages dynamically?

const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const nameError = document.querySelector('.nameError');
const passwordError = document.querySelector('.passwordError');
const emailError = document.querySelector('.emailError');

inputName.addEventListener('input', (e)=>{
    let name = e.target.value
    if(name.length < 4){
        nameError.innerText = 'Error:- Name should be atleast of 3 characters';
    }else{
        nameError.innerText = "";
    }
})

inputEmail.addEventListener('input', (e) => {
  let email = e.target.value;
  if(!email.includes('@')|| !email.includes('.')) { //.includes
    emailError.innerText = "Error";
  }else{
    emailError.innerText = "";
  }
});

inputPassword.addEventListener('input', (e) => {
  let password = e.target.value
  if(password.length < 6) {
    passwordError.innerText = "Error:- password is too short";
  }else{
    passwordError.innerText = "";
  }
})