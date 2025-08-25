// async : Placed before declaration of function : makes function always return a promise :

// await : used inside async func: Pauses the execution of async funciton until the promise is resolved or rejected, then returns the resolved value.

// clean syntax
//eg 1
function getData(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name: data,
            })
        },1000)
    })
}
async function fetchData(){
    let data1 = await getData("gaurav");
    console.log(data1);
    let data2 = await getData("manav");
    console.log(data2);
    let data3 = await getData("sita");
    console.log(data3);
    let data4 = await getData("Ram");
    console.log(data4);
}
fetchData();

//eg 2 
async function fetching(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
}
fetching()