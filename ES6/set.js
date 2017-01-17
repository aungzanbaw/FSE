'use strict'

let exam = new Set()

exam.add(90)
exam.add(80)
exam.add(60)

exam.has(70)  // false
exam.has(60)  // true

exam.size  // 3

exam.delete(90) // true

for (let x of exam) {
  console.log(x)
}

exam.forEach(function (val) {
  console.log(val)
})
