// Immediately Inovked function expressions (IIFE) IIFE = function jo define hote hi turant run ho jata hai

// (jo function imdiately invoked ho jaye ) global scope ke pollution se problem hoti h kai bar us global variable ya expression ko hatane ke liye (avoid) karne ke liye use karte h 


// named IIFE ( but we cant'n define name IFEE we call imidiatelly so no need to named  )
(function ifee (){
  console.log(`DATABASE CONNECTED`);
  
}) () ; //( semicolon is compulsory because it can not know where will be excuted ,so we use the semicolon for end the IFEE function)


//unamed IFEE with parameter

((name) => {
  console.log(`DATABASE CONNECTED WITH ${name}`);
})("PRINCE") ;