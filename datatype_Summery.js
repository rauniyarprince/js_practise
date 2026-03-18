//primtive datatypes
// 7types : String,Number,Boolean,null,undefined,Symbol,BigInt

// non-primtive (reference type)
// Array ,Object , Function

// types of memory
// 1- Stack(primtive)- get the copy of the original value
// 2- Heap(Non - primtive) - get the reference of the original value

let myinstaname = "prince0777"
let anothername = myinstaname
anothername = "prince0999"

console.log(myinstaname); // prince0777
console.log(anothername); // prince0999

let user = {
  name : "prince",
  id : 223 ,
  address : "sbz"
}

let usertwo = user

usertwo.name = "deepak"

console.log(user.name); // deepak
console.log(usertwo.name); //deepak (because it pass the reference of original value)


