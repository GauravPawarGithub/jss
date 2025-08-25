// :: ARRAY METHODS ::

// concatination of two arrays
let letters = ['a','b','c','d'];
let nums = [2,3,4,5,6,6];
let concat = nums.concat(letters) 
console.log(concat) //[2, 3, 4, 5, 6, 6, 'a', 'b', 'c', 'd']

// reverse an array
let ans = [2,3,4]
let reverse = ans.reverse();
console.log(ans) //[4, 3, 2]

// join
let b = [2,3,4,5,6,7,8]
let joined = b.join('-') //convert array into string using seperator 
console.log(joined)//2-3-4-5-6-7-8

// slice  :- extract part of array & gives copy of array(immuntated) : slice(firstIndex(included), lastIndex(excluded)) 
let digits = [4,2,3,8,5,6]
let sliced = digits.slice(1, 4); 
console.log(sliced) //2,3,8
console.log(digits) //original array remain unchanged
console.log(digits.slice(-1)) // 6 :- extract last index for(-2) extract last 2 element

// splice  :can extract and Add parts in array : original array changes(mutated) : splice(kha se krna hai, kitne change krna hai, kisse krna hai)
let n = [1,2,3,4]
let spliced = n.splice(2,2,9)
console.log(n)//1,2,9

// at  : USED TO ACCESS ARRAY ELEMENT
let digit = [2,3,4,5,6,7]
console.log(digit.at(1)) //3
// at  :useful in getting the last element of array
console.log(digit.at(-1)) //7 
console.log(digit.at(-2)) //6 
//console.log(digit[digit.length-1]) //7  normal way 

// at : ALSO USED TO ACCESS STRING ELEMENT
let str = "agni"
console.log(str.at(0)) //a
console.log(str.at(-1)) //i   (-2)->n

// map method : method to create new array from original array by applying transformation function : return value of map array is equal to orignal array in map
let salaries = [1000, 2000, 3000, 4000]
let newSalaries = salaries.map(salary => {
        let incrementAmount = salary / 2;
        return salary + incrementAmount;
    })
console.log(newSalaries); //modified array : [ 1500, 3000, 4500, 6000 ]
console.log(salaries)//original array : [ 1000, 2000, 3000, 4000 ]

// Filter  : used to filter elements of array : return value of filter is not equal to original array
let names = ['ram', 'shyam', 'hitler', 'donald', 'shyam']
let filtered = names.filter(name =>{
    if(name == 'ram' || name == 'shyam'){
        return name;
    }
})
console.log(filtered) //only [ 'ram', 'shyam', 'shyam' ]

// reduce  : reduces elements of array into single value : array.reduce(function(total, currentValue), initialvalue) : intialvalue -> acumulator as total initially
let arr = [1,2,3,4,5] 
let sum = arr.reduce(function(accumulator, iterator){
    return accumulator + iterator;
},0)
console.log(sum) 

// find  : return the 'first' element we are looking for
let students = [{id:1, name: "gaurav" }, {id:2, name:"pawar"}]
let result = students.find(student =>{
    return student.id === 1;
})
console.log(result); //{ id: 1, name: 'gaurav' }

// findIndex : returns the 'first' index of element we are looking for
let fruits = [{id:1, name: "orange" }, {id:2, name:"stawberry"}, {id:3, name:"mango"}]
let results = fruits.findIndex(fruit =>{
    return fruit.name === 'mango';
})
console.log(results);//2

let ages = [4,21,38,87,9]
let parinam = ages.findIndex(age =>{
    return age > 15;
})
console.log(parinam) //ans-> 1 else give -1 if criteria dosen't meet

// some : returns "true" if "any" array element pass the test
// every : returns "true" if "all" elements pass the test
let scores1 = [20,39,69,54]
let uttar1 = scores1.some(score=>{
    return score > 30;
}) 
console.log(uttar1); //ture

let scores2 = [20,39,69,54]
let uttar2 = scores2.every(score=>{
    return score > 30;
}) 
console.log(uttar2); //false

// flat : Creates a new array with elements of the subarrays "concatenated" into it
let A = [1,2,3,[4,5,[6,7,8]]]
console.log('original:', A)//[1, 2, 3,[ 4, 5,[ 6, 7, 8 ]]]

let Result = A.flat();
console.log('after flat(1) :', Result)//[1, 2, 3, 4, 5,[6, 7, 8]] 1st depth

let Results = A.flat(2);
console.log("after flat(2) :", Results);// [1,2,3,4,5,6,7,8] 2nd depth

// flatMap : it is combination of the "map()" then "flat()" of depth 1.
let cart = [{
    name: "Gaurav",
    qty: 2,
    price: 200
}, {
    name: "pawar",
    qty: 4,
    price: 400
}]
let newCart = cart.flatMap(item=>{
    if(item.name === "Gaurav"){
        return[item, {
            name: "striver",
            qty: 5,
            price: 40 
        }]
    }else{
        return [item]
    }
})
console.log(newCart)

// sort : sorts an array
let arr1 = [2, -1, -22, 1, 9, 8]
let arr2 = [2, -1, -22, 1, 9, 8]

arr1.sort((a,b)=>{
  return a - b; //ascending order
})
console.log(arr1);

arr1.sort((a,b)=>{
  return b - a; //descemdomg
})
console.log(arr1);


// chain of methods 


