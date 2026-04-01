//Promise is a way to handle asynchronous operations in JavaScript.
//A Promise is a JavaScript object that gives you a result in the future, either success or failure.
// IN Before ES6 use BlueBird liberary for achive the database requested
// two way one is create a promises and second one is consume promises
/* Promise has 3 states
1. Pending
The operation is still in progress
2. Fulfilled (Resolved)
The operation completed successfully
3. Rejected
The operation failed */  

// create a promises
// promise contain callback func and its two parts resolve,reject

const promiseOne = new Promise(function(resolve,reject){
  //Do an async task
  // DB calls, cryptography,network
setTimeout(function(){
  resolve() // connect with resolve
  console.log("Async task is completed");
},1000)
})
promiseOne.then(function(){
  console.log("Promise consumed");
  
})  // resolve connectivity

// direct creation of promise

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task two");
    resolve()
  }, 1000);
}).then(function(){
  console.log("Async 2 resolved");
  
})

// other promise

const promiseThree = new Promise(function(resolve,reject){
setTimeout(function(){
resolve({username:"Chai",email:"chai@exmaple.com"})

},1000)
}) 
promiseThree.then(function(user){
  console.log(user);
})

// fourth promise
const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true
if(!error){
  resolve({username:"prince",password: "12345" })
}
else{
  reject("Error: Something went wrong")
}
  },1000)
})
promiseFour
.then(function(user){
console.log(username);
return user.username
})
.then(function(username){
  console.log(username);
})
.catch(function(Error){
  console.log("Error");
})
.finally(function(){
  console.log("the promise is either resolved or rejected");
})


// // fifth promise

const promiseFive = new Promise (function (resolve,reject){
  setTimeout(function(){
      let error = true
  if(!error){
  resolve({username:"Kartik",password: "23345" })
}
else{
  reject("Error: Something went wrong")
}
  },1000)
});
// async not handle direct error
async function consumePromiseFive(){
  try{
  const response = await promiseFive
  console.log(response);
  }
  catch(error){
    console.log("error in fifth promises : ", error);
  }
}

consumePromiseFive()
 
// async uses

// async function getAllUsers(){
//   try{
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')

//   const data = await response.json()
//   console.log(data);
//   }
//   catch(error){
//     console.log("Error:", error);
//   }
// }
// getAllUsers()


// with .then , .catch

fetch('https://api.github.com/users/rauniyarprince')
.then(function(response){
  return response.json()
})
.then(function(response){
  console.log(response);
})
.catch(function(error){
  console.log(error);
})





