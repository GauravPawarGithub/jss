// How would you toggle a class on an element when another element is clicked (e.g., show/hide sidebar)?

//using classList.toggle('') :-  add or remove a CSS class from an element

const sidebar = document.querySelector('.sidebar');
const button = document.querySelector('button')

button.addEventListener('click', ()=>{
  sidebar.classList.toggle("showSidebar"); //Show/hide elements
})

//transform: translateX(-100%); shrink 100% to right side

//transform: translate(0%); original size translate