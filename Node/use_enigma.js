'use strict'

const Enigma = require('./enigma')
const eng = new Enigma('asd123!@#')

let encodeString = eng.encode("hello world")
console.log(`Encode : ${encodeString}`)

let decodeString = eng.decode(encodeString)
console.log(`Decode : ${decodeString}`)
