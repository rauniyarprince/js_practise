const score = 400.3665
console.log(score);

const balance = new Number(100.99) // to make a object 
console.log(balance);

console.log(balance.toFixed(2)); //100.29 , it use in ecomerce website for show the relvent value ,preference after the decimal value

console.log(balance.toPrecision(3)); //101 round of the value

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // by default return the us value numbering ,but pass in the own standar in the method as like en-IN (10,00,000)


// +++++++++++++++++ Maths +++++++++++++++++++


console.log(Math);

console.log("print the absolute value =", Math.abs(-20));
console.log("round of the value =",Math.round(23.964));
console.log("take the upper value =",Math.ceil(4.5));
console.log("take the lower value =",Math.floor(4.3));
console.log("power of 10 is = ",Math.sqrt(10));
console.log("print the min value =",Math.min(2,6,9,3,6,10)
);
console.log("print the max value = ",Math.max(2,6,9,3,6,10));

// Random otp generation 


console.log("generate the random otp =", Math.random());

// random function in js generate only number b/w 0 & 1 , solution

console.log(Math.random()); // 0 & 1 
console.log((Math.random() * 10) + 1); 
// sometime generate 0.04123 like this , to avoid this you multiply with 10 to shift right 
// and add 1 to avoid (0)

console.log(Math.floor(Math.random() * 10) + 1) 
// to avoid the decimal number we use the floor function 
// now generate one single number b/w 1 to 10 

// but sometime given the criteria , then what you do - we define the min & max for random number 
// first we define the min & max value

const min = 1000 // for min selection
const max = 9999 // for max selection

console.log(Math.floor(Math.random() * (max - min + 1)) + min ) 
// first we apply the random func. and multiply to the (max - min + 1) value 
// and use Math.floor func to remove decimal value 
// after that we add min value for min selection
// now we get the random number between 1000 and 9999












