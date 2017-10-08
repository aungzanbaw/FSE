console.log(x);
var x = 0;
console.log(x);

var x = undefined;
console.log(x); // undefined
x = 0;
console.log(x); // 0


////////////////////////////////////////////////////////

function foo(){
  function bar(){
    return "bar 1";
  }
  return bar();
  function bar(){
    return "bar 2";
  }
}
console.log(foo())


function foo(){
  function bar(){
    return "bar 1";
  }
  function bar(){
    return "bar 2";
  }
  bar();
}
console.log(foo())

///////////////////////////////////////////////////////

function foo(){
  var bar = function(){
    return "bar 1";
  }
  return bar();
  var bar = function(){
    return "bar 2";
  }
}
console.log(foo())

function foo(){
  var bar = undefined;
  var bar = undefined;
  bar = function(){
    return "bar 1";
  } 
  return bar();
}
console.log(foo())