'use strict'
// export.js
export function foo(){
  console.log('foo')
}

export function bar(){
  console.log('bar')
}

// import.js
import {foo,bar} from './export.js'
foo()  // foo
bar()  // bar
