function outer (){
  const name ="prince"

  function inner(){
    const website = "https//portfolio"
   // console.log(name);
  }
 // console.log(website);
  inner()
} 
outer()   // clouser example



if(true){
  const id ="52"
  if(id === "52"){
    const degisination = "desktop support"
  //   console.log(id + degisination)
  }
 // console.log(degisination)
}
 //console.log(id);     clouser example


 // +++++++++++++ interesting +++++++++++++++++

 console.log(addone (5)) //its possible due to hoisting(In JavaScript, function declarations are loaded into memory before the code is executed.)
 function addone (num){ // function declaration
  return num + 1 
 }

// console.log(addtwo(8))  
 const addtwo = function(num){ // function expression (first run)
  return num + 2
 }
