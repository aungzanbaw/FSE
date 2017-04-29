// Passing as Params
function doStuff (x, y, z) {
  console.log(x,y,z)
}
let args = [0, 1, 2]
doStuff(...args)

// Combine Array
let arr1 = ['two', 'three']
let arr2 = ['one', ...arr1, 'four', 'five']

// Copying array
let arr1 = [1,2,3]
let arr2 = [...arr]

// Convert DOM to array
[...document.querySelectorAll('div')]
// Array.from()

// Destructuring Fun
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// x, y, z
