//for loop
let arr = [2,4,5]
for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}

//if-else and else-if statement
let budget = 1000;
if(budget>5000){
    console.log("good")
}else if(budget>2000){
    console.log("great")
}else{
    console.log("harish")
}

//jump statement - break and continue
for(let i = 1; i<=5; i++){
    if(i == 2){
        continue; //move towards the next iteration 
    }
    console.log("value of i = ", i)
}
for(let i = 1; i<=10; i++){
    if(i == 5){
        console.log('desired value is : ', i)
        break; 
    }
    console.log("num = ", i)
}

//logical operator && || not !
let password = 'gaurav@'
if(password.length<5 && password.includes('@')){
    console.log('good')
}else{
    console.log('bad')
}

if(password.length<5 || password.includes('@')){
    console.log('good')
}

//logical not operator ! "true to false" and "false to true"
let status = false;
if(!status){   // if status is false or not true, null, undefined, 0, "", etc.
  console.log("your status is =", status);
}

//priorities 1.Not 2.AND, OR from left to write
let result = true && true || false && !false
/*
result = true && true || false && true
result = true || false && true
result = true && true -> true
*/
console.log(result) //result true

//ternary operator(? :)
let age = 30;
let ans = age>18 ? 'Qualify' : "fail";
console.log(ans)

