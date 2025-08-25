/* 
DOM:-> document object model:
browser creates objects of html: document object
*/
console.log(document)
console.log(document.URL)

//selecting html element
let resultElement = document.querySelector('p');
//let resultElement = document.querySelectorAll('p');
console.log(resultElement);

let a = document.querySelector('.Gaurav')
console.log(a)
let b = document.getElementById('Pawar')
console.log(b)

// innerText and innerHTML
let heading =document.querySelector('h1')
// heading.innerText = "hey" //overwrite
heading.innerText += "hey "  //append
console.log(heading.innerText)
console.log(heading.innerHTML)

//adding the style
heading.style.color = 'Red';
//adding the class
heading.classList.add('newClass')
//remove the class
heading.classList.remove('newClass')
//replace the class
heading.classList.replace('H1class', 'newClass')
//toggleclass
heading.classList.toggle('');

//getting and setting ATTRIBUTE of element
let link = document.querySelector('a')
console.log(link.getAttribute('href'))

link.setAttribute("href", "https://www.youtube.com/");
console.log(link.getAttribute('href'))

//link.innerHTML = "new link"

//parent children sibling
let parentElement = document.querySelector('.divClass')
console.log(parentElement)
console.log(parentElement.children) //html collection
console.log(Array.from(parentElement.children))//converting htmlcollection into arrayElement to run forEach 
Array.from(parentElement.children).forEach(function(element){
    element.classList.add('childClass')
})

//child is known not get parent
let childElement = document.querySelector('h4')
console.log(childElement.parentElement)//to get parent element

//find sibling of child
console.log(childElement.nextElementSibling)
console.log(childElement.previousElementSibling)

//Events basic
let resultEvent = document.querySelector('li') //taking unordered list
console.log(resultEvent);
resultEvent.addEventListener('click', ()=>{
    console.log('event happened');
})

let button = document.querySelector('.clickMe') //taking button
button.addEventListener('click', ()=>{
    alert('alert')
    console.log('button clicked and alert generated')
})

//Creating Element
const ul = document.querySelector('ul');
button.addEventListener('click',function(){
    let li = document.createElement('li');  //creating an element
    li.textContent = "new Element created"; //content into element
    ul.append(li);//adding into list
    //ul.prepend(li);
})

//removing an element
let c = document.querySelectorAll('li')
c.forEach(function(element){
    element.addEventListener('click',e=>{
        e.target.remove();
    })
})
//Event 


