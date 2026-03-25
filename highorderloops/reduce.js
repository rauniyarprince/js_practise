const mynums = [1,2,3,4,5,6,7,8,9]
const intial = 0
// using fucntion
const value = mynums.reduce(function(acc,curval){
return acc + curval
},0)
console.log(value);

// using arrow function
const value2 = mynums.reduce((acc,curval)=> acc + curval , 0)
console.log(value2)

const shoppingcart = [
  {
itemName : "mobile  DevCourse" , price : 2999 
 },
   {
itemName : "MERN DevCourse" , price : 3999 
 },
   {
itemName : "JavaFull stack  DevCourse" ,price : 4999 
 },
   {
itemName : "Data Science" , price : 2499
 },
]
const add = shoppingcart.reduce((acc,item)=>acc+item.price ,0)
console.log(add)
