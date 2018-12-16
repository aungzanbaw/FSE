// functional code should be stateless, as soon as it created it nerver mutated

const data = Object.freeze([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

// we achieve our desire next state with function as argument 
// also known as function as parameter/argument  

const transformRamda = val => `${val} λ`

const result = data.map(transformRamda)

console.log(result)