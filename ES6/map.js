'use strict'

// key/value

let person = new Map()

person.set("name","kyaw kyaw")
person.set("age",32)

person.size // 2
person.get('name') // kyaw kyaw
person.has('name') // true
person.has('address') // false
person.set('phone',9499393939)
preson.delete('phone') // true

for (let [key,val] of person) {
  console.log(key,val)
}

person.forEach(function (val,key) {
  console.log(key,val)
})
