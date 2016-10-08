function fire(bool) {
  //let foo;  // best pratice to declare variable at the top
  if (bool) {
    let foo = "bar"
    console.log(foo)
  }else {
    console.log(foo)
  }
}
fire(false)
