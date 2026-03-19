function loggedin(){
  console.log("hi,i'm loggedIn")
}
loggedin() // normal function

// function with return value

function loggedIn(name) {
  if(!name){
    return "please enter the name"
  }
  else{
    return `${name} just loggedIn`
  } 
}
console.log(loggedIn("prince"))

// function with default parameter

function loggedIn(name ="xyz") {

    return `${name} just loggedIn`
  
}
console.log(loggedIn())