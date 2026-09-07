// Day 5: Objects & Arrays of Objects
// Level 1 (Beginner)
// Car Object
const cars = {
    brand :"bmw",
    model : "m3 com",
    year : 2022,
}
// console.log(`This car is a ${cars.brand} ${cars.model}`)

// Object Mutation

const pers = {
    name : "ayoub",
    age : 25
}
pers.isActive = true
pers.age = 22

// console.log(pers.isActive)
// console.log(pers.age)

// Key/Value Iteration:

for( car in cars){
    console.log(`p : ${car} => ${cars[car]}`)
}