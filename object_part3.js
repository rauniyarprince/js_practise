//Object destructuring is a way to extract properties from an object and assign them to variables in a cleaner and shorter syntax.

const courses = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor :  "prince"
}


const { courseInstructor , coursename} = courses 
console.log(courseInstructor); // object de-structure

const {courseInstructor : Deepak } = courses 
 console.log(Deepak); // rename the key of object 

// const {courseInstructor = "XYZ" } = courses  (assigning - for taking the default value)


 