
function func(name = "defaultGaurav", surname = "defaultPawar"){
    console.log(`my name is : ${name} and surname is : ${surname}`); //template literal
}
func() //without arguments
func('gaurav', 'pawar') //with arguments

let variation  = function(){ //anonymous funciton //function expression
    console.log('second way to write function')
}
variation();

function variations(){ 
    console.log('simple way to write a function')
}
variations();

//return value
let ageCalculation = function(birthYear, currentYear = 2025){
    let age = currentYear - birthYear
    return age; 
}
console.log(ageCalculation(2003));

//arrow fucntion
let age = number => `my umar is  ${number}`
console.log(age(4))

let func1 = (a,b)=>{
    return a + b   
}
console.log(func1(2,3))

let func2 = (a,b)=> a + b
console.log(func2(4,5))

//callbacks passing function as an arguments
function uppercase(str) {
    return str.toUpperCase();
}
function lowercase(str) {
    return str.toLowerCase();
}
function transformer(str, fun) {
    return fun(str);
}
console.log(transformer('gaurav', uppercase))
console.log(transformer('gaurav', lowercase))

//higher order function : funciton returning another function
let compliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`)
    }
}
compliment('hello')('gaurav');

//immediately invoked funciton expression //executed only once
//now this is expression
(function(){
    console.log("immediately invoked funciton");
})()

//setTimeOut(fucn/code, delay, arg1, arg2) 
setTimeout(function greeting(name, age) {
  console.log(`my name is ${name} and my age is ${age}`);
}, 5000, "gaurav", 20);

/*
setInterval(func/code, delay, arg1, arg2)
setInterval(function greeting(){
    console.log("setInterval")
}, 4000)

*/


// HOISTING : variable/function "declaration" are "hoisted" towards "top" of their scope
test = 'gaurav'
console.log(test)
var test; //valid for var only :: not for let const 

greet(); //only valid for normal function
function greet(){ 
    console.log("function hoisting")
}

// greet()  not valid for function expression
// let greet = function(){
//     console.log("hello gaurav")
// }

