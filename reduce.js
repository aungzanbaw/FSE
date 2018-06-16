'use strcit'

const orders = [
  {amount: 120},
  {amount: 20},
  {amount: 80},
  {amount: 302}
]

// const sum = orders.reduce((sum, order) => sum += order.amount ,0)

// const sum = orders.reduce(function(sum, order){
//   console.log('hello', sum, order) // just to show you what's going on here
//   return sum += order.amount
// },0)

// const sum = 0
// for (var i = 0; i < orders.length; i++) {
//   sum += orders[i].amount
// }

// console.log(sum)


const obj = {
  a: 1,
  b: 2,
  c: 3
}

res = Object.keys(obj).reduce((result, key) => {
  result.push({
    key: key,
    value: obj[key]
  })
  return result
}, [])

console.log(res)
