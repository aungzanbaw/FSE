let arr = [1,2,3,4,5,6,7,8,9,0]

function odd(array, callback) {
  let odds = array.filter(n => n % 2)
  let error = new Error("custom error")
  setTimeout(()=>{
    callback(error, odds)
  },1000)
}

console.log("Before")
odd(arr,function(error, data) {
  // if (error) throw error
  console.log(data)
})
console.log("After")
