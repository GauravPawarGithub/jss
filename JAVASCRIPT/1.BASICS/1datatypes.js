/* DATA TYPES */

let name = null //null
console.log(name);

let cls; //undefined
console.log(cls)

//concatination
let first = "ram";
let second = "shyam";
console.log(first, second);   

let fullname = `me and my friend ${first} ${second}` //using two literals with backtick
console.log(fullname)

let third = first + second;
console.log(third)

//typeof
console.log(typeof first);

//string methods     
let s = "   Gaurav Pawar   " 
console.log(s[8]) //getting string character
console.log(s.toUpperCase()) //uppercase

let firstName = "     my name is gaurac ";
console.log(firstName)
let result = firstName.trim(); //treim method remove spaces
console.log(result)
console.log(result.lastIndexOf("m")) //last tiime kab aya
console.log(result.indexOf("gaurac")) //first time kab aya 
console.log(result.includes("gaurac")) //exist or not(ture or false)

let slc = "hanuman"
console.log(slc.slice(0,5)) //till 4th index not 5

let favoriteColors = "Brown Blue black red"
console.log(favoriteColors.split(' '))//string to array () //seperator(' ')
console.log(favoriteColors.split(''))//String to array of characters

//strings are immutable cannot be changed

//NUMBERS
let score = 50;
console.log(score, typeof score);
let ans = score*2 + (4*2) - 8/2 % 4;
//using priority and precedence 1.brackets() 2.** power operator 3. * / % (from left to right) 4. + - (from left t0 right)
console.log(ans)

//losse equality operator != ==
let age = 22; //number type value
console.log(age == '22') // true: checks only on value not Type

//stictly equality operator === !==
 console.log(age === '22')// false: checks both value and type

//type conversion : Number and string methods 
let str = '54'  //string //should be valid string
let numberType = Number(str); //converted in to number 
console.log(numberType, typeof numberType) 

let num = 54; // number
let strType = String(num); //converted in to string
console.log(strType, typeof strType) 

//Bolean true or false
let umar = 55;
console.log("boolean value of age is ", Boolean(umar)); //true except 0 and false for space

//arrays: mutable
let dishes = ['Biryani', 'Chat', 'paratha'];
console.log(dishes[1])
console.log(dishes.length) //length of array : 3
console.log(dishes.push('jalebi'))// returns new length of array : 4 //mutable
console.log(dishes.pop())// remove last element of array
console.log(dishes.join(' ')) //join method: seperator - , space etc
console.log(dishes.indexOf("Chat"))

let veg = ['tomato', 'garlic'];
console.log(dishes.concat(veg)) //concat dishes and veg


// ** power operator