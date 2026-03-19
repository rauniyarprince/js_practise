// Singleton
// (An object that has only one instance)
// JavaScript does NOT create singleton by default,
// but it can be implemented using constructor or logic

//  Objects can be created in two main ways:
// 1. Object Literal
// 2. Constructor (Object.create, function, class)

const uniqueKey = Symbol("key") // symbol declaration (used for unique key)
const JsUser = {
  name: "XYZ", // normal key (string type)
  age: 18,
  [uniqueKey]: "for uniqueness", 
  //  symbol used as a key (always unique, no conflict)
  location: "Siswa Bazar",
  email: "princerauniayr3000712@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

//  Accessing object values
console.log(JsUser.name)       
// best and simple way (dot notation)

console.log(JsUser["name"])    
// access using string key (bracket notation)

console.log(JsUser[uniqueKey]) 
// symbol can only be accessed using bracket notation

console.log(JsUser)            
// prints the entire object

// Updating value

JsUser.name = "Prince"         
console.log(JsUser.name)       
// value updated successfully

// Adding a function (method)

JsUser.greeting = function () {
  console.log(`what's up, myself ${this.name}`)
}

// Understanding the difference

console.log(JsUser.greeting)   
//  only returns function reference (not executed)

console.log(JsUser.greeting()) 
//  executes the function
//  returns undefined (no return statement)
// Freezing the object (locking structure)

Object.freeze(JsUser)  
// top-level changes are not allowed

// this change will NOT happen
JsUser.name = "Rauniyar"
console.log("we can't change =", JsUser.name)
// output: Prince (unchanged)

// IMPORTANT (shallow freeze concept)

JsUser.lastLoginDays.push("Sunday") 
// this will still work (nested array is mutable)
console.log(JsUser.lastLoginDays)
// freeze() locks the reference, not the inner data