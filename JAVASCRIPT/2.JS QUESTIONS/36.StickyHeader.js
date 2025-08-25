// 36. Create a Sticky Header on Scroll. The header becomes fixed to the top after scrolling down. 
//(Key concepts: scroll event, window.scrollY, classList.add/remove)

const navbar = document.querySelector('nav')
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 70){
        navbar.classList.add('stick');
    }else{
        navbar.classList.remove('stick');
    }
})

/*

window.alert() – shows an alert box

window.innerWidth and window.innerHeight – get the size of the viewport

window.scrollY – get the vertical scroll position

window.location – get or set the current URL

window.setTimeout() and window.setInterval() – run code after a delay or repeatedly

*/