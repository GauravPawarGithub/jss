//Promise :- An Object that represents the eventual completion (or failure) of an Async operation and its resulting value.  

//constructor function invoked with new keyword

//resolve and reject : callbacks : provided by JavaScript

//3 states : pending->still waiting : resolved(fullfilled)->task completed: Rejected->something went wrong:

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name: "Gaurav",
            })
            //reject("rejected")
        }, 3000)
    })
}
function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        product : "Samsungf41",
      });
      //reject("rejected")
    }, 3000);
  });
}
console.log("fetching data");

fetchData()
    .then((data)=>{
        console.log("Data arrived", data);
        return fetchData2();
    })
    .then((data)=>{
        console.log("Final data arrived", data);
    })
    .catch((err)=>{
        console.error(err);
    })