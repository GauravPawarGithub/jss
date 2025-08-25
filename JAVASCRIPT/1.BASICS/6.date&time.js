//DATE and Time

//UTC coordinated universal time (referece time zone : global standard for time)

//ISO international org for stand..  T:seperate date and time : Z means UTC time
// YYYY-MM-DD T HH:mm:ss:sssZ eg: 2025-05-19T14:30:00Z

// UNIX EPOCH :-> starting point (jha se calculation(miliseconds me) start hua hai) : January 1, 1970, 00:00:00 UTC

//UNIX TIME (epoch time):-> no. of miliseconds since unix epoch

//let date = new Date();//cureent time and date  //new : used to create an object from a constructor function or class

let date = new Date("2003-09-10T05:50:50Z"); //IS0 standard UTC time //create a date
console.log(date); //2003-09-10T05:50:50.000Z
console.log(date, typeof date); //2003-09-10T05:50:50.000Z object

//formating dates
console.log(date.toISOString()); //2003-09-10T05:50:50.000Z
console.log(date.toString()); //Wed Sep 10 2003 11:20:50 GMT+0530 (India Standard Time)
console.log(date.toDateString()); //Wed Sep 10 2003
console.log(date.toTimeString()); //11:20:50 GMT+0530 (India Standard Time)
console.log(date.toLocaleString()); //10/9/2003, 11:20:50 am

//getting parts of date
console.log(date.getDate()); //10
console.log(date.getMonth()); //**8** : month 0-based index month(ans 8 :-> month 9(sept))
console.log(date.getFullYear()); //2003
console.log(
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
  date.getMilliseconds()
); //11 20 50 0 -> UTC + 5:30(local IST)
console.log(
  date.getUTCHours(),
  date.getUTCMinutes(),
  date.getUTCSeconds(),
  date.getUTCMilliseconds()
); //5 50 50 0 -> UTC

//custom formating
console.log(
  `${date.getDate()} day ${
    date.getMonth() + 1
  } month ${date.getFullYear()} year`
); //10 day 8 month 2003 year

//  UTC - localtime => timezone OFFset
console.log(date.getTimezoneOffset()); //-330 (minutes)
console.log(date.getTimezoneOffset() / 60); //-5.5 (hour)

//creating a timestemp ( Milliseconds )
let timestemp = Date.now(); //Date.now()/1000/60/60/24/365 :-> years
console.log(timestemp);
//or
console.log(date.getTime()); //timestemp
//0r
console.log(Date.now()); //current timestemp in miliseconds since unix epoch(jan 1 1970)

//timestemp to date
let newDate = new Date(timestemp);
console.log(newDate);

//add and subtract //adding 10 minute to timestemp
let currentTime = Date.now();
console.log(currentTime);
console.log(new Date(currentTime).toLocaleString());

let tenMin = 10 * 60 * 1000; //10 minutes into milliseconds

let updatedTime = currentTime + tenMin;
console.log(updatedTime);
console.log(new Date(updatedTime).toLocaleString()); //Date() without new always returns the current date as a string, regardless of the argument

//calculating difference between dates
let start = new Date("2025-09-10");
let end = new Date("2003-09-10");
let diff = start - end;
console.log(Math.round(diff / 1000 / 60 / 60 / 24 / 365)); //22years
