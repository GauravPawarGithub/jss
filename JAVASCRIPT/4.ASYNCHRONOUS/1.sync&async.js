 //Javascript : single threaded : does one thing at a time

//Synchronous->  executes code line by line.each operation must complete before the next one start. ->can block the flow, --->simple task, calculations


console.log(1);
console.log(1);
for(let i=0; i<4000; i++){ //blocked next code to run this
    console.log(i);
}
console.log(2);


//Asynchronous:->skips long task, Allow to execute next instructions immediately and doesn't block the flow. ---> api-calls,DBqueries,timers

console.log('async');
setTimeout(()=>{
    console.log("after everything");
},4000)
console.log('async completed');




// CALLBACKS -> PROMISES(FETCH) -> Async Await

//sara Dhoka hai BSS API ke sath kaam krna hai using Fetch() async await
