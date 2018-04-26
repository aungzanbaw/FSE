function testPromise(){
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Another way to write Async code!"), 250)
    })
}

testPromise()
    .then(msg => console.log(msg))
    .catch(e => console.error(e))