function recursion(x) {
    if (x===1) return x
    return x + recursion(x-1)
}

// console.log(recursion(5))

function tailRecursion(x, running_total=0) {
    if (x===0) return running_total 
    return tailRecursion(x-1, running_total+x)
}

console.log(tailRecursion(5))
// tailrecsum(5, 0)
// tailrecsum(4, 5)
// tailrecsum(3, 9)
// tailrecsum(2, 12)
// tailrecsum(1, 14)
// tailrecsum(0, 15)