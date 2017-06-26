'use strict';

let gLogNumber, gIncreaseNumber, gSetNumber;
function setupSomeGlobals() {
  // Local variable that ends up within closure
  let num = 42;
  // Store some references to functions as global variables
  gLogNumber = function() { console.log(num); }
  gIncreaseNumber = function() { num++; }
  gSetNumber = function(x) { num = x; }
}

setupSomeGlobals();
gIncreaseNumber();
gLogNumber(); // 43
gSetNumber(5);
gLogNumber(); // 5

let oldLog = gLogNumber;

setupSomeGlobals();
gLogNumber(); // 42

oldLog() // 5

// call setupSomeGlobals() again, then a new closure (stack-frame!) is created. The old gLogNumber, gIncreaseNumber, gSetNumber variables are overwritten with new functions that have the new closure. (In JavaScript, whenever you declare a function inside another function, the inside function(s) is/are recreated again each time the outside function is called.)