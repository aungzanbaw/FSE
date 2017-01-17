// in strict mode following things are true
// No duplicate properties nor params in obj
let obj = {
  name: "azb",
  name: "azb"
}
console.log(obj)

function test(a,a,b){ /*Duplicate parameter name not allowed in this context*/ }


// No global variable
hello = "epic"

// setting properties in primitive values
false.true = ""  // Cannot create property 'true' on boolean 'false'
(14).helloWorld = "what's up homy"
"with".you = "with you"
