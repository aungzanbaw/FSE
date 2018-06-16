// STRING
"hello world".indexOf('o')
"hello world".indexOf('o',5)  // 2nd params starting point
"hello world".slice(0,5) // starting index, ending index
"hello world".slice(0) // slice up end of string
"hello world".slice(-1) // start backward
"hello world".substr(0,5) // starting index, length of substring
"hello world".substring(5,0) // same fun as slice, second param can be lower than the first
"a b c".split(" ") // space as character to split output array
"hola".toUpperCase()
"BPPLE".toLowerCase()
"hello world".includes("hello") // es6
"hello world".startWith("hello") // es6, second params is starting index
"hello world".endWith("world") // es6, second params is starting index
"hello world".repeat(2) // es6
"hello world".match(/\s/) // find space with RegExp
"hello world".replace(/(\w+)\s(\w+)/, '$2 $1') // replace string flip-flop with RegExp
"hello world".search(/\s/) // find space with RegExp

// NUMBER
3.141592653589793.toExponential(3)  // convert to exponential form
3.141592653589793.toFixed(3)  // show fix number
Number.parseInt("123.456", 10)  // always return whole number, sec param 10 -> decimal, 2 -> binary, 8 -> octal
Number.parseFloat("123.456")
0xFF // Hexa in number (int)
0b11 // Binary in number (int)
0o10 // Octal in number (int)
Number.isInteger()
Number.NaN()
Number.isFinite()

// DATE
get____ // getDate, getDay, getFullYear,...
set____ // setDate, setHours, setFullYear,...
Date.parse("June 19,2010")   // unix epoch

// ARRAY
[1,2,3,4].join(' ')  // single character to join as string
"thou shall not the might space".split(" ").join("_")
[1,2,3,4].pop()  // remove last item
["Beta","Gamma"].push("Delta")  // adds an item to the end
[1,2,3,4].shift() // remove first item
["Beta","Gamma","Delta"].unshift("Alpha") // adds an item to the first
[1,2,3,4].reverse() // flip flop
[1,2,3,4,5,6,7,8,9].slice(1,2) // can start from zero, sec is optional
[0,5,10,15,20,25].sort() // [ 0, 10, 15, 20, 25, 5 ]
// no param mean sort by unicode rule
[0,5,10,15,20,25].sort(function(a,b){
  return a - b
})
["1","2","foo","3","5","bar","8"]
  .map(x => parseInt(x))  // each room
  .filter(x => !isNaN(x)) // filter by some condition
  .reduce((x,y) => x+y)

[2,4,6,8,10].indexOf(8) > -1  // return true or false
[2,4,6,8,10].includes(8)  // es7 EPIC ! return true or false
[2,4,6,8,10].find(callback) // kinda like map or filter
[2,4,6,8,10].findIndex(callback) // return first index that match your condition
['angel', 'clown', 'mandarin', 'sturgeon'].splice(0,1) // start, delete count
[1,2,3,4,5].fill(0) // fill all the elements with static 0

let keys = [1,2,3,4,5].keys() // get new Array Iterator contain keys
keys.next() // { value: 0, done: false }

let values = [1,2,3,4,5].values() // get new Array Iterator contain values
values.next().value; // 1

let number = ["uno","dos","tres","las cuatro","cinco"].entries()
number.next().value; // [0, "uno"]

// Math
Math.min(53,23,5,43,5)
Math.max(53,23,5,43,5)
Math.random()
Math.round()  // round to nearest
Math.ceil() // round up
Math.floor() // round down

Math.floor(Math.random() * 10)   // 0-9
function getRandomNumberInRange(min,max){
    return Math.floor(Math.random() * (max - min + 1))
}
Math.pow(3,3) // number, power (2,-1)

// OBJECT
// 1. Dirty way to check obj equality work without METHODS and DOM NODES
a = {name: 'kyaw', age: 34}
JSON.stringify(a) === JSON.stringify(a)  

// 2. Reference the same obj
a = {}
Object.is(a, a)
Object.is(a, {})

// 3. Lodash 
_.isEqual(bobaFett, jangoFett)

/*
* https://stackoverflow.com/questions/201183/how-to-determine-equality-for-two-javascript-objects 
* https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
*/