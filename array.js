const myArr = [2,5,8,9,3,2,5]
// in the js array store the mix dataype
//it generate the shallow copy 
// array is resizeable
const heroes = ["saktiman","salman","ritik"]
const arry = new Array(2,5,9,6,6,3)
console.log(myArr[5]);
console.log(arry[2]);


// +++++++++++ array method ++++++++++++++
 myArr.push(50) // add the element at last 
 console.log(myArr);

 myArr.pop()// remove the element at last
 console.log(myArr);

 myArr.unshift(21) // add the element in the first
 console.log(myArr);

 myArr.shift()// delete the element at the first
 console.log(myArr);

 console.log(myArr.includes(5));
console.log(myArr.indexOf(3));

const newarray = myArr.join() //add the array but return the string 
console.log(newarray);

// slice and splice

const newarry = [5,9,3,2,1]
console.log("slice" ,newarry.slice(1,4)); //return the value without changing 

const newarry1 = [5,9,3,2,1]
console.log("splice" ,newarry1.splice(1,4)); // return the new update array 


 
 




 
 

 
