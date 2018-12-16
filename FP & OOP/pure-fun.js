// always process upon parameters 
// don't take any global variable access 
// do not modify anything including parameters 
// mutation on parameters also prohibit, only return a new value

const num = 199

function toString(val) {
    return val.toString()
}

const result = toString(num)

console.log(typeof result)