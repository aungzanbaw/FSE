// Array
const point = [10, 25, -34]
const x = point[0]
const y = point[1]
const z = point[2]
// Array Destructuring 
const [x, y, z] = point
const [x,  , z] = point
// Output
console.log(x, y, z)

// Object
const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
}
const type = gemstone.type
const color = gemstone.color
const karat = gemstone.karat
// Object Destructuring
const {type, color, karat} = gemstone
const {type} = gemstone
// Output
console.log(type, color, karat)