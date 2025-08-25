/* OOBJECTS */

let car = {
    color : "black",
    model : "2022",
    company : "jtix"
}
console.log(car); //full object

//accessing (READ) the object property
console.log(car["company"]); //method 1 
console.log(car.color) // method 2 

let propertyName = 'model'; //dynamic 
console.log(car[propertyName])
console.log(car.propertyName) //give undefined

//modify(re-write) the object property 
car.model = "1990"
console.log(car.model)

// DELETE properties of Object
delete car.color // or car["color"]
console.log(car) //color property deleted from object : car

// METHODS : function declared inside an object
let person = {
    ageCalculate : function(birthyear){
        let age = 2025 - birthyear;
        console.log(`my age is ${age}`)
    }
}
person.ageCalculate(2003)

let person2 = {
  ageCalculate: function (birthyear) {
    let age = 2025 - birthyear;
    return age
  },
};
console.log(person2.ageCalculate(2003));

// THIS keyword : isi object ka:  used inside methods :: represent the object :: access the properties of object
 let person3 = { 
    name : "Gaurav", //can change properties
    city : "Bhopal",
    food : "aloo",
    getSummery : function(){
        return `my name is ${this.name} i live in ${this.city} and my favourite food is ${this.food}`
    }
 }
 console.log(person3.getSummery());

// ForEach Method : like a callback func
/* A for each loop is a way to go through every item in a list or group (like an array) and do something with each item.*/

let name = ['Gaurav', 'Jack', 'Thomas']
name.forEach(function(element){
    console.log(element)
})

//objects inside array
let blockList = [{username : "gaurav", reason : "abusive content"}, {username : "ram", reason: "talking shit"}]
console.log(blockList);

for(let i=0; i<blockList.length; i++){
    console.log(`name ${blockList[i].username} is blocked due to reason ${blockList[i].reason}`) 
}

//math object : built in object in js
console.log(Math)

let number = 7.4;
console.log(Math.round(number)) 
console.log(Math.floor(number))
console.log(Math.ceil(number))
console.log(Math.trunc(number))

let num = Math.random();
console.log(num)

// CALL and APPLY method : manually set the value of "this" keyword using call and apply
let mainPlane = {
    airline : "Fly India",
    iatacode: "F1",
    bookings: [],
    book : function(name, flightNum){
        console.log(`${name} book flight on ${this.airline} with flight number ${this.iatacode}${flightNum}`)
        this.bookings.push({flight : `${this.airline}`, name:name,flightNum:`${this.iatacode}${flightNum}`})
    }
}
mainPlane.book("Gaurav", 223)
mainPlane.book("Pawar", 223)
console.log(mainPlane)

let chidlPlane = {
    airline : "Child Plane",
    iatacode : "F2",
    bookings: [],
}
let book = mainPlane.book;
/*
book("Shruti", 222) //book is regular function 
"this" value is "undefined" at least in strict mode
solution is to use methods
*/
book.call(chidlPlane, "Shruti", 222); //call sets "this" to childPlane and passes arguments individually

book.apply(chidlPlane, ["gaurav", 232]); //apply sets this to childPlane and passes arguments as an array

let books = mainPlane.book.bind(chidlPlane);//bind creates a new function where this is permanently set to childPlane
books("shruti", 5556)


// PASS BY REFERENCE
let arr = [1,2,3,4,5]
let getref = arr; //reference(memory location) of arr is passed, will change the original
getref[3] = 8; 
console.log("original value", arr) //also changed to 8
console.log("getref value", getref)

// PASS BY VALUE
let getvalue = [...arr]; //copy of arr is passed only
getvalue[4] = 9; 
console.log("original value", arr); // original not changed
console.log("getref value", getvalue);

//  for-in loop (each iteration return a "key" of object)
let fruit = {
    color : "yello",
    taste : "sour",
    quality: "A2"
}
let x = " ";
for(let key in fruit){
    x = x + fruit[key]
}
console.log(x);
