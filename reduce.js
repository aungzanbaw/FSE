let arr = [1,2,3,4,5,6,7]

let result = arr.reduce((a,b) => {
  return a + b
},0)

let result = arr.reduce((a,b) => {
  return (a|0) + b
})

console.log(result) // same result 28
