let arr = [1,2,3,4,5,6,7]

let result = arr.reduce((sum,b) => {
  return sum + b
},0)

let result = arr.reduce((sum,b) => {
  return (sum|0) + b
})

console.log(result) // same result 28
