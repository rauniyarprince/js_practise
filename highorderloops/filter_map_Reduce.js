// // filter is used to extract elements from an array based on a condition and returns a new array.

// const myNums = [8,9,6,3,6,4,5,2,6,3,6,5,2,7,9]

// const newNums = myNums.filter((val)=>( val > 4 ))
// console.log(newNums);
// // when we use the scope ({) you can return explicitly value
// const newNums2 = myNums.filter((val) =>{ return val < 4 
// })
// console.log(newNums2);

// // alternative without filter 

// const newnums =[]
// myNums.forEach((num) => {
//   if(num > 7){
//     newnums.push(num)
//   }
// })
// console.log(newnums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userbooks = books.filter((data) =>(data.genre === 'Science'))
console.log(userbooks);


// when we use the scope ({})than you explicilty retun the value 
const publish = books.filter((data2) => { return data2.publish <= 1995 && data2.genre === "History" } )
console.log(publish);


