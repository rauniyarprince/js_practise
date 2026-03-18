let myDate = new Date()  // date is a function constructor so we can firstly create a object of the date like myDate (but Math is the static object we can no create a onject as like Date we can directly use )
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateDate = new Date(2026,0,23)
let myCreateDate1 = new Date(2026,0,23,5,3,0) 
let myCreateDate2 = new Date("2026-03-18")// in the js month start from the 0 (ex 0 is january)
console.log(myCreateDate2);
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now() // current date & time
console.log(myTimeStamp);

console.log(myCreateDate.getTime())

let newDate = new Date()
console.log("current time =", newDate.getTime());
console.log("current day =",newDate.getDay());
console.log("current year =",newDate.getFullYear());
console.log("current date =",newDate.getDate());

 




