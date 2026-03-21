// // // for loop
// // for(let i = 0 ; i <= 50 ; i++){
// // if(i % 2 == 0){
// //   console.log("even number =",i )
// // }
// // else{
// //   console.log("odd num = ",i)
// // }
// // }

// // // table print using for 

// // for(let i = 2 ; i<=10 ; i++){
// //   console.log(`Table = ${i}`)
// //   for(let j = 1 ; j <= 10 ; j++){
// //     console.log(`${i}*${j}= ${i*j}`)
// //   }
// // }

// // in array 

const array = [[5, 8, 6], [8, 9, 6]]
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length ;  j++) {
 console.log(array[i][j])
}
}




// break , continue
 const name =["deepak","kajal","kartik","aman","payal","prince","anamika"]

 for(let guess = 0 ; guess < name.length ;guess++){
   if (name[guess] === "prince"){
    console.log(`now will be your number:${name[guess]}`)
    break;
  }
   console.log("member is : ",name[guess])
 }
 
 // continue
  for(let i = 0 ; i < 10; i++){
   if (i == 5){
    console.log("number will be detected" , i)
    continue;
  }
   console.log("print : ",i)
  }