'use strict'

// the way of other programming languages
// function oddSync(num){
//   return num.filter(n => n % 2 )
//
// }
// let numbers = [1,2,3,4,5,6,7,8,9]
// let oddNumbers = oddSync(numbers)
// console.log(oddNumbers)


// Async
function odd(arr, callback){
  let oddNums = arr.filter(n => n % 2)
  setTimeout(()=> callback(null,oddNums) ,1000) // replace null with new Error("error msg")
}

let numbers = [1,2,3,4,5,6,7,8,9]
odd(numbers,(err,data) => {
  if(err) console.log(err)
  console.log(data)
})
