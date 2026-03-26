// you can declare the string with the four differect types
let name = "princerauniyar" 
let address = 'sbz'
let shape = `rectangle`
const gameName = new String("football")

console.log(name + address + " " + "there are the values"); // this is not a standard way to print the string 

console.log(`my name is ${name} i'm' from ${address},and my shpae is ${shape} amd  i like the ${gameName}` ); // this is the standard way to print the string by using the stack holder.
console.log("which letter" ,"(",gameName[5],")");

// method
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt("3"));
console.log(name.indexOf("n"));


const newString = name.substring(0,8) // using method and store in the new var
console.log(newString); 

const newString2 = name.slice(-2)  // in the slice we can pass the negative index but not work in the substring
console.log(newString2); 


const newString3 = "      kartik  "
console.log(newString3);
console.log(newString3.trim());

let url = "https;//princeportfolio%20.com"
console.log(url.replace('%20','-'))

console.log(url.includes('portfolio'));


let group = "prince-deepak-kartik"

console.log(group.split('-')); // convert in array                











 


