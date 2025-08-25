// 1.Create a function that returns the last element of an array.
let ar = [1,3,9,7];
function lastElement(l){
    console.log(l[l.length-1]);
}
lastElement(ar);

// 2.max number in array
//console.log(Math.max(ar)); -> undefined as it only take element or number
console.log(Math.max(...ar)) //using spread operator

// 3.combo of two arrays
let a = [1,9,2,3,4]
let b = [5,6,7,8,9]
let c = [...a, ...b] //spread operator
let d = a.concat(b) //concat methpd
console.log(d)
console.log(c)

// 4.generate random integer between 0 and 18(included)
console.log(Math.floor(Math.random()*19));

// 5.Create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values.
let e = [1,2,'str', 'g']
let result = e.filter(element =>{
    if(typeof element === 'string'){
        return true;
    }else{
        return false;
    }
    //return typeof element === 'string'; 
});
console.log(result);

//6. Write a function that returns the length of a given object (no. of keys).
let o = {
    name: "gaurav",
    age: '21',
    city: 'chhindwara'
}
function getObjectLength(obj){
    console.log(Object.keys(obj).length); //object.keys(obj).length -> 3
}
getObjectLength(o);

//7. In an array of objects filter out those objects which have gender's value male.
let arr = [
  {
    name: "git",
    gender: "male",
  },
  {
    name: "gauri",
    gender: "female",
  },
  {
    name: "vandebharat",
    gender: "male",
  },
];
let results = arr.filter(obj =>{
    return obj.gender === 'male';
})
console.log(results);

//8. Given an array of strings, return a new array where all strings are in uppercase.
let names = ['gaurav', 'pawar', 'is', 'the', 'best'];
let ans = names.map(name =>{  //map loop me transform krta hai
    return name.toUpperCase();
})
console.log(ans);

//9. Check if an object is empty (has no keys).
let Obj = {
    name : 'gaurav'
};

if(Object.keys(Obj).length == 0){ //object.keys(obj)->make array of keys
    console.log('empty');
}else{
    console.log('not Empty');
}

//10. Create an array of numbers and double each value using .map().
let array = [2,3,4,5,6,7];
let answer = array.map(num =>{
    return num * 2;
}) 
console.log(answer);

//11. Convert an array of strings into a single comma-separated string.
let Arr = [2,'gaurav', '2', 7, 8];
let Result = Arr.join(',');  //array -> sting : join //by default also ','
console.log(Result);

//12. Write a function to flatten a nested array (one level deep).
let nesArr = [1, ['a', 'b'], 4];
let flatten = nesArr.flat(); // flat() == flat(1)
console.log(flatten);

//13. Write a function that checks if all elements in an array are numbers.
let arrays = [1,2,'h',3];
let checkNum = arrays.every(element =>{ //every 
    return typeof element === 'number';
})
console.log(checkNum); //false

//14. Build a simple isPrime() function to check if a number is prime.
function isPrime(number){
    for(let i=2; i*i<=number; i++){
        if(number%i === 0){
            return false;
        }
    }
    return true;
} 
if(isPrime(7)){
    console.log('prime number');
}else{
    console.log('not a prime')
}

//15.Create a function that removes duplicate values from an array.
function removeDuplicate(arr){
    let set = new Set(arr);
    console.log([...set]); //set -> array by using spread operator
}
removeDuplicate([1,2,2,4,4,4,5,5,6])

//16. What’s the difference between parseInt and Number()?
/* 
   parseInt : Parses a string and returns an integer, not a float
   parseFloat : Parses a string and returns a float
   number() : Converts the entire string to a number (integer or float)
*/
console.log(parseInt('456.456')) //456
console.log(Number('456.456'));// 456.456
console.log(parseInt('1adfalskdf324')) //1
console.log(Number('1adfalskdf324')) //NaN
console.log(parseFloat('456.456')); //456.456 parseFLoat 

//17. 18.  Why does 0.1 + 0.2 !== 0.3 in JavaScript? 
// ans:-> floating point precision issue (conversion from Number -> binary(machine lang) rsult in precision issue).
console.log(0.1 + 0.2); //0.30000000000000004

//19. How would you handle high-precision decimal math in JS? -> toFixed method + number method

let summ = (0.1 + 0.2).toFixed(2) //0.30 
//toFixed: method convert number to a string, rounding it to a specified number of decimal places
let sum = Number((0.1 + 0.2).toFixed(2)) //handle precision and convert string into number
console.log(sum === 0.3); //true

// 20. What is the difference between slice and splice? slice-> array&string :: splice-> only on array 
let string = 'Gaurav';
console.log(string.slice(2,4)); //ur //original array remain unchanged
console.log(string.slice(-5,-2)); //aur

// 21. Create a function that reverse each word of a given sentence.
let sentence = "Gaurav is best";
// spit : string -> array : (' ')wordarray ('')individual
// join : array -> string : (' ')(',')('-')
let FinalResult = sentence.split(' ').map(word =>{
    let result = word.split('').reverse().join('');
    return result;
})
console.log(FinalResult.join(' ')); //varuaG si tseb

// 22. In an array of numbers and strings, only add those numbers which are not strings. -> can use map or forEach
let numbers = [2,3,'gaurab','45', 5];
let sums = 0 
numbers.map(num =>{
    if(typeof num === 'number'){
        sums += num;
    }
})
console.log(sums)//10

//23. How would you check if a number is an integer?
console.log(Number.isInteger(234)); //true
console.log(Number.isInteger(234.254)); //false
console.log(234 % 1 === 0) //true otherwise false for float

//24. Write a JavaScript function that reverse a number 
function reverseNumber(num){
  let resultss = Number(num.toString().split("").reverse().join(""));
  console.log(resultss, typeof resultss); //432 number
}
reverseNumber(234); //432 number

//25. Write a javascript function that returns a passed string with letters in alphabetical order.
function reverse(str){
  console.log(str.split(" ").sort().join(" ").trim()); //boy gaurav good is
  console.log(str.split("").sort().join("").trim()); //aabdggiooorsuvy
}
reverse('gaurav is good boy');

//26. Write a Javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
let line = "all girls are the same";
function capitalizeFirstLetter(string){
    let result = string.split(' ').map(word=>{
       return word.charAt(0).toUpperCase() + word.slice(1)
    })
    console.log(result.join(' ')) //All Girls Are The Same
}
capitalizeFirstLetter(line);

//27. Write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function getArrayElement(arr, n){
    if(!n){
        console.log(arr[0]);
    }else if(n > arr.length){
        console.log('size exceeded')
    }else{
      console.log(arr.slice(0, n)); //[8, 2, 9]
    }
}
getArrayElement([8,2,9,4,5],3);

// ** 28. Write a javascript function to get the number of occurrences of each letter in specified string. 
let S = "Gaurav";
function getOccurences(word){
    let freqObj = {};
    //string-> arr-> loop->freqObj->check
    word.split('').forEach(letter =>{
        if(freqObj.hasOwnProperty(letter)){ //letter already present in obj or not
            freqObj[letter]++;
        }else{
            freqObj[letter] = 1
        }
    }); 
    console.log(freqObj);   

    //printing key and value from obj
    for(let key in freqObj){ 
        console.log(`${key} : ${freqObj[key]}`)//value = obj[key]
    }
}
getOccurences(S)

//29. write a javascript program to find the most frequent item of an array. (arr->loop->obj->maxFreq(value)->filter)
function mostFrequentItem(arr){
    let freqObj = {};
    //moving array element into object
    arr.forEach(element => {
        if(freqObj.hasOwnProperty(element)){
            freqObj[element]++;
        }else{
            freqObj[element] = 1;
        }
    })
    //maxFreq of object values (can be more tham 1)
    let maxFreq = Math.max(...Object.values(freqObj));

    let keyValueArr = Object.entries(freqObj)// obj->array[key, value]
    let filtedArray = keyValueArr.filter(entryArr=>{
        return entryArr[1] === maxFreq; //1 refers to values
    })
    console.log(filtedArray)
}
mostFrequentItem([2,3,4,4,4,5,3,7,3]);

//Object.values(freqObj) return array of values of object 
//Math.max dosen't work on array, use math.max(...arr) 

// 30. write a javascript program to shuffle an array.
let Array = [1,2,3,4,5];
for(let index in Array){
  let randomIndex = Math.floor(Math.random() * Array.length);
    /*
    1. first method to swap or shuffle

    let temp = Array[index];
    Array[index] = Array[randomIndex];
    Array[randomIndex] = temp;

    */
    //2. array de-structuring : swap two elements in an array
    [Array[randomIndex], Array[index]] = [Array[index], Array[randomIndex]];
    
}
console.log(Array)

//31. How can you update the DOM based on user input in real-time (e.g., live preview of a form)?

//nullish coalescing operator -> ??  left is null or undefined
console.log(null ?? "default"); 
console.log(undefined ?? "default");
console.log(false ?? "default");

//HOF map() fin() filter() forEach()

//HOISTING : allow variables and functions to be used before they are declared in the code,
//  variable and function declarations are moved to the top of their containing scope during compilation, before the code is executed.
q = 20;
q++;
console.log(q);

var q;

//memorization : optimization technique :->store result of  js expensive fucntion :-> objects or map()

//promises: object: represent results of asyn function 
//states 3 pending fullfiled(resolve) rejected
//new promise(resolve, rejected) success:-> .then() failure->.catch() 

//44. 
let date = new Date(0);
console.log(date); //1970-01-01T00:00:00.000Z UNIX EPOCH 

// 45. Validate that a user's selected date range is no longer than 30 days.
let nowDate = new Date('2025-04-23');
let userDate = new Date('2025-05-25');
let diff = userDate - nowDate;
let numOfDays= Math.floor(diff/1000/60/60/24);
console.log(numOfDays);
if(numOfDays > 30){
    console.log('deadline crossed Launde');
}else{
    console.log('congratulations form submit ho gya launde');
}

// 46. Calculate difference between two dates in the format of “_ years _ months _days _ hours _ minutes _ sec”.
let startingDate = new Date("2024-04-28T08:23:13Z");
let endingDate = new Date("2025-07-23T09:24:12Z"); 

function takeDifference(start, end){
    let diff = (end - start)/1000;
    let years = Math.floor(diff/(60*60*24*365));
    console.log(years, diff); 
    diff = diff % (60 * 60 * 24 * 365);
    console.log(years, diff);
}
takeDifference(startingDate, endingDate)