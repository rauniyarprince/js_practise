 const isUserLoggedIn = true 
 const temperature = 41

 if(temperature === 40){
  console.log("less than 50")
 }
 else{
  console.log("temperature is greater than 50");
 }
console.log("execute")


const score = 200

if(score > 200){
  let power ="fly"
  console.log(`user power : ${power}`);
}

   // console.log(`user power : ${power}`); // error because we can the value outer of scope
 
 
 const balance = 1000

 //if (balance > 500) console.log("yes its greater amount ") // its a bad habbit for if used 


// multiple if else
 if(balnce < 500){
  console.log("less than 500");
 }
 else if(balance < 750){
  console.log("less than 750");
 }
else if(balance < 1000){
  console.log("less than 1000");
}
else (balance < 1100){
  console.log("balance less than 1100");
}


//swtich case 

const key = 4
switch (key){
case 1:
  console.log("door first is open");
  break;
  case 2:
  console.log("door second is open");
  break;
  case 3:
  console.log("door third is open");
  break;
  case 4:
  console.log("door fourth is open");
  break;
  case 5:
  console.log("door fifth is open");
  break;
  case 6:
  console.log("door sixth is open");
  break;
  default :
    console.log("error"); 
}

 
 const userEmail=[]

//  if (userEmail){
//   console.log("got user email");
//  }
//  else{
//   console.log("don't have user email");
//  }
 
// -------------------------------------

// correct way to check array
 if (userEmail.length === 0){
  console.log("got user email");
 }
 else{
  console.log("don't have user email");
 }

 // ---------- to check object-----------

 const obj = {}
  if (Object.keys(Obj).length === 0){
  console.log("got user email");
 }
 else{
  console.log("don't have user email");
 }
 
 
 
 
 
 
 
 // true value (" ", empty obj {} ,empty array [],function(){}, "0", "false")

 //false value (0,false,-0, BigInt,"",undefined,NaN)
 
 
 // nullish coalescing operator (??): null 
// it used in database for avoid intruppting in code 
 let value = 20 ?? 30
 console.log(value);
 
 let value2 = 20 ?? undefined
 console.log(value2);
 
 let value3 = null ?? 30
 console.log(value3);

 let value4 = null ?? undefined ?? 40
 console.log(value4);


 // ternary operator (shortcut of ifelse)
// condition ? true :false

const iceTeaPrice = 100 
iceTeaPrice <= 80  ? console.log("less than 80") : console.log("more than 80")