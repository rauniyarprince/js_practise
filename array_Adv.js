const marvel_Heroes = ["thor","Ironman","spiderman"]
const dc_Heroes = ["superman", "flash", "batman"]
marvel_Heroes.push(dc_Heroes)
console.log(marvel_Heroes) // not add element in one array it create a nested array

console.log(marvel_Heroes[3][1]); //flash

marvel_Heroes.concat(dc_Heroes) //we store the array for combine ,it combine and  generate new array but firstly we can store in the var

const allHeroes = marvel_Heroes.concat(dc_Heroes)

console.log("combine array =" ,allHeroes)

const all_new_heroes = [...marvel_Heroes, ...dc_Heroes]
console.log(all_new_heroes)

const realarray = [2, 2, 3, 6,9, [9, 6, 3],[8, 5, 5, [8, 6, [8, 9, 6, 70], [89, 2, 6, 3]]]]

const combine_in_one = realarray.flat(Infinity) //we can use the flat func and pass the depth array ,but we can pass infinity for chooes all aray

console.log(combine_in_one)


console.log(Array.isArray("hitesh")) // check the array

console.log(Array.from("prince")); // create a array for given data
console.log(Array.from({name:"prince"})) //How to decide “on what to make an array

const scroe = 500
const scroe1 = 600
const scroe2 = 700
const scroe3 = 5800

console.log(Array.of(scroe,scroe1,scroe2,scroe3)); // generate the array for given data








