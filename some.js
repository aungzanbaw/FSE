'use strcit'

let array = [24,23,153,6453,1214,1000]

let foo = array.some(function(a){
  return a > 1000
})

console.log(foo)
