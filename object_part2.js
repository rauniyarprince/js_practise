const tinderUser = new Object() // singleton object
const tinderUser2 = {} // non-singleton object (both create empty objects)

tinderUser2.name = "prince rauniyar"
tinderUser2.id = "5236dfa"
tinderUser2.isLoggedIn = false

console.log(tinderUser2);


// nested object
const newobj = {
  name: "kartik",
  email: "princerauniyar3000712@gmail.com",
  address: {
    permanent_address: {
      address: "pratappur",
      state: "uttarpradesh",
      pincode: "273185",
    },
    current_address: {
      address: "Lucknow",
      state: "uttarpradesh",
      pincode: "226028",
    }
  },
  mo_nu: "0000000000"
}

console.log("pincode is =", newobj.address.permanent_address.pincode)


// joining the objects
const obj1 = {
  1: "p",
  2: "r",
  3: "i"
}

const obj2 = {
  4: "n",
  5: "c",
  6: "e"
}

// wrong way (creates nested object)
const obj3 = { obj1, obj2 }

// correct ways
const objall = Object.assign({}, obj1, obj2)
console.log(objall)

const bestobj = { ...obj1, ...obj2 }
console.log(bestobj)


// array of objects (used in database)
const user = [
  {
    id: 1,
    email: "prin@gmail.com"
  },
  {
    id: 2,
    email: "xyz74@gmail.com"
  },
  {
    id: 3,
    email: "fas90@gmail.com"
  }
]

console.log(user[1].email)


// object methods
console.log("keys =", Object.keys(tinderUser2)) // return the array
console.log("values =", Object.values(tinderUser2))
console.log("entries =", Object.entries(tinderUser2))

console.log("check =", tinderUser2.hasOwnProperty("isLoggedIn"))