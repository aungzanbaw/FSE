'use strict'

/*
*   NodeList/DOMTokenList
*   Set
*   Map
*   Array(TypeArrays)
*/

const marks = [40, 60, 80, 90]

marks.forEach(m => console.log(m))

marks.forEach(function(mark){
    console.log(mark)
})

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i])
}

const marksSet = new Set([40, 60, 80, 90])
marksSet.forEach(m => console.log(m))

const marksMap = new Map([['kyaw', 40],['aung', 60],['sai', 80],['mya', 90]])
marksMap.forEach((value, key) => console.log(value, key))