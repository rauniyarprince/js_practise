//  Map: Map is a built-in data structure in JavaScript
// that stores data in key-value pairs
// Each value is stored with a unique key
// Any type of key is allowed

const map = new Map();
// set() is used to add data
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('FR', 'France');
// get() is used to retrieve data
console.log(map.get('IN')); // India
console.log(map);

//  Not ideal for Map (gives array [key, value])
for (const value of map) {
  console.log(value); 
}

//  Correct way to iterate Map (destructuring)
for (const [key, value] of map) {
  console.log(key, ":", value);
}

// Difference:
// for...of → gives values (in Map: [key, value])
// for...in → gives keys (mainly used for objects)


// Object iteration using for...in
const myobject = {
  game1: "cricket",
  game2: "football",
  game3: "hockey",
};  
for (const key in myobject) {
  console.log(key, ":", myobject[key]);
}


// Array iteration using for...in (not recommended)
const programming = ["python", "datascience", "javascript", "php"];

for (const key in programming) {
  console.log(key); // prints index (0,1,2...)
}


// forEach loop (best for arrays)
const coding = ["c", "java", "python",  "php"];

// normal function
coding.forEach(function (val) { // you can give parameter anything
  console.log(val);
});

// arrow function
coding.forEach((item) => { // you can give parameter anything 
  console.log(item);
});

// separate function
function printMe(item) {
  console.log(item);
}
coding.forEach(printMe); // given reference

// with index and full array
coding.forEach((item, index, arr) => { // for each store the three different default value(index,item,arr)
  console.log(item, index, arr);
});
const mycoding =[ 
  {
    languagename : javascri
  }
]