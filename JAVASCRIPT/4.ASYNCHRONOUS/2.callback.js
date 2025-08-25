//callback : function passed as an argument to another function and that another function is Higher order function

// higher-order function:->  a function that either takes one or more functions as arguments, or returns a function as its result

// eg 1. synchronous nature of callback 
function hod(name, callback){ //higher order function
    callback(name);
}
function printName(name){
    console.log(` ${name} is a good boy `);
}
hod("gaurav", printName);

//eg 2 ---------------------
function calculate (a, b, callback){
    callback(a,b);
}
function sum(a,b){
    console.log(a + b);
}
function subtract(a, b){
    console.log(a - b);
}
function multiply(a, b){
    console.log(a*b);
}
calculate(4, 3, multiply)
//-----------------------

//asynchronous nature of callback eg 1->
console.log("1. fetching data.... ");

function fetchData(processData){ //Higher order function (async)
    setTimeout(()=>{
        console.log("2. data fetch ho chuka hai");
        processData();
    }, 3000);
}

function processData(){
    console.log("3. Processing data");
}

fetchData(processData) //1 4 2 3

console.log("4.some other data,......");

//-------------------------------------

//(async) Callback Hell:-> Situation where multiple nested callback functions are used to perform asyn tasks, resulting in code that is deeply indented, hard to read, maintain, and debug

function getData(data, callback){
    setTimeout(()=>{
        console.log(data);
        if(callback){
            callback();
        }
    }, 3000);
}
getData("Data 1", ()=>{
    console.log("fetching data 2");
    getData("Data 2", ()=>{
        console.log("fetching data 3");
        getData("Data 3", ()=>{
            console.log("fetching data 4");
            getData("data 4", ()=>{
                console.log("end of data");
            })
        })
    })
})

//---------------------------------------