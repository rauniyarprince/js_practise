const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newnums = myNumers.map((value)=>( value+10))
//console.log(newnums);


const newnum2 = myNumers.map((value2) =>{ return value2 * 10 } )
//console.log(newnum2);

const newnum3 = myNumers
.map ((value3)=>(value3 - 2)) // it reference of 2nd map
.map((value3)=>(value3 * 0.3))
.filter((value3)=>( value3 <= 8 ))

console.log(newnum3)