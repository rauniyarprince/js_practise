//  Object creation
const user = {
  username: "prince",
  price: "free",

  //  Method (normal function)
  value: function () {
    // `this` refers to the current object (user)
    console.log(`${this.username}, welcome to website`);

    // prints full current object
    console.log(this); 
  }
};

// calling method
user.value();

// updating object value
user.username = "jagarnath";

// calling again (updated value will print)
user.value();


// Global context
console.log(this);  
// browser → window
// node → {}


// IMPORTANT:
// `this` works based on HOW function is called
// inside object method → `this = object`


// Normal function
function chai() {
  let username = "prince";

  // this does NOT refer to this function's local variables
  // it refers to global object
  console.log(this.username); 
}
chai(); // undefined


// Arrow function
const chai2 = () => {
  let username = "prince";

  // arrow function does NOT have its own `this`
  // it uses outer (global) `this`
  console.log(this.username); 
};
chai2(); // undefined



// ++++++++++++ ARROW FUNCTION +++++++++++++++


// (1) Explicit return arrow function
const arrowfunc = (num, num2) => {
  // manually return value
  return num + num2;
};

console.log("addition =", arrowfunc(5, 4));


//  (2) Implicit return arrow function
const arrowfunc2 = (num, num2) => num - num2;
// no need to write return keyword

console.log("subtract =", arrowfunc2(5, 4));


// (3) Single parameter implicit return
const arrowfunc3 = (num) => num * num;
// if single expression → no need of {} and return

console.log("square =", arrowfunc3(6));


// (4) Returning object in arrow function
const arrowfunc4 = () => ({ user: "prince" });
// object return karte time () use karna zaruri hai
// otherwise {} ko block samjha jayega

console.log(arrowfunc4());


// this = calling object (in normal function)

// normal function → this = global object
// arrow function → this = outer scope

// arrow function ka apna this nahi hota
// ye parent ka this use karta hai

// implicit return → no need of return keyword
// explicit return → return likhna padta hai