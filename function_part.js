//rest operator in function (spread operator)
function calculatecarprice(...value){
  return value
}
console.log(calculatecarprice(5,6,9,6,3,5,6)
) // easily we add

function calculate(vara,vara2, ...val){
  return val
}
console.log(calculate(5,6,9,6,3,5,6) // take number after 2 digit
)

// pssing the object in the function
const  user = {
  name : "prince",
  price : "free"
}

function object (data){
  return `my name is ${date.name}, and price is ${data.price}`
}

// both are same way to passes value
console.log(user)
console.log({name : "prince", price : "free"}) // we can pass direct 

// pssing the array in the function
const myNerarray =[ 200,300,236,58,933]

function returnarray (getarray){
return getarray[1]
}

// both are same way to passes value
console.log(returnarray(myNerarray));
console.log(returnarray([ 200,300,236,58,933]));