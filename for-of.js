"use strict"

// The for...of statement creates a loop iterating over iterable objects 
// (including the built-in String, Array, e.g. the Array-like arguments or NodeList objects, TypedArray, Map and Set, and user-defined iterables)

//  Array
const marks = [40, 60, 80, 90]
for (const property of marks) {
    console.log(`Value ${property}`)
}

// String
const address = "No 90, wall street"
for (const property of address) {
    console.log(`Value ${property}`)
}

// Set
const marksSet = new Set([40, 60, 80, 90])
for (const property of marksSet) {
    console.log(`Value ${property}`)
}

// Map
const marksMap = new Map([['kyaw', 40],['aung', 60],['sai', 80],['mya', 90]])
for (const [v, k] of marksMap) {
    console.log(`Key ${v} : Value ${k}`)
}

// arguments 
(function() {
    for (const argument of arguments) {
      console.log(argument)
    }
})(1, 2, 3)

// DOM NodeList not HTMLCollection
const articleParagraphs = document.querySelectorAll('h1')
for (let paragraph of articleParagraphs) {
  paragraph.classList.add('read');
}

// iterators, iterators over generators