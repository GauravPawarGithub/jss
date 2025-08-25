//31. How can you update the DOM based on user input in real-time (e.g., live preview of a form)?

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const nameValue = document.querySelector('.nameValue');
const emailValue = document.querySelector('.emailValue');

nameInput.addEventListener('input', (e)=>{
    nameValue.innerHTML = e.target.value;
})

emailInput.addEventListener("input", (e) => {
  emailValue.innerHTML = e.target.value;
});
