class Emoji{
    constructor(public icon){

    }
}

const unicorn = new Emoji('🦄')

console.log(unicorn) // check the precomiple version on class.js

// if you want to use typescript via cli do following
// npm install typescript -g
// tsc class.ts 
// node class.js 