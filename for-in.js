"use strict"

// The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.
// For each distinct property, statements can be executed.

let person = {
    name: "Mike",
    age: 39
}

person.address = "No 90, wall street"

for (let property in person) {
    console.log(`Key ${property} : Value ${person[property]}`)
}

const marks = [40, 60, 80, 90]
marks.yoda = "Fear is the path to the dark side"
for (let index in marks) {
    console.log(marks[index])
}