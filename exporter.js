"use strict"
// we may use default key for default export
export class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks
  }
  dump(){
    console.log(this.tasks)
  }
}

export let foo = "bar"

export let myFun = function() {
  return "hello there"
}
