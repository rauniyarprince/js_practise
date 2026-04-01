const promiseFive = new promise (function (resolve,reject){
  setTimeout(function(){
  if(!error){
  resolve({username:"Kartik",password: "23345" })
}
else{
  reject("Error: Something went wrong")
}
  },1000)
})
// async not handle direct error
async function consumePromiseFive(){
  try{
  const response = await promiseFive
  console.log(response);
  }
  catch{
    console.log(error);
    
  }
}