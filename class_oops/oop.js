const user = {
  username:"hitesh",
  loginCount : 8,
  signedIn :true ,
  getUserDetails: function(){
    console.log("got user details from database");
  }
}

console.log(user.username);
console.log(user.getUserDetails());

      

function User(username,loginCount,isLoggedIn){
this.username = username;
this.loginCount = loginCount;
this.isLoggedIn = isLoggedIn
return this
}

const userOne = new User("prince",12,true) // new keyord ise used for create a new instance and safe for the overwrite
const userTwo = new User("Kartik",22,false)

console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor); // constructor is a refrence for itself                       



