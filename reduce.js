'use strcit'

let orders = [
  {amount: 120},
  {amount: 20},
  {amount: 80},
  {amount: 302}
]

let sum = orders.reduce((sum, order) => sum += order.amount ,0)

let sum = orders.reduce(function(sum, order){
  console.log('hello', sum, order) // just to show you what's going on here
  return sum += order.amount
},0)

let sum = 0
for (var i = 0; i < orders.length; i++) {
  sum += orders[i].amount
}

console.log(sum)
