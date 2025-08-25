//33. How do you find the closest ancestor element that matches a selector. 

// e.target.closest(selector) :->> selector can be anything. tagname, class, id etc starting from element itself

//It returns the first matching ancestor it finds, or null if no match exists
const child = document.querySelector('#child')
child.addEventListener('click', (e)=>{
    console.log(e.target.closest('.parent'))
})