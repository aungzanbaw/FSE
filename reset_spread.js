'use strict';
// Array
const array = [1,2,3,4,5,6,7];
const [first, second, ...rest] = array;
console.log(first);
console.log(second);
console.log(rest);

const arrayCopy = [first, second, ...rest];
console.log(arrayCopy);

/*
*   still not support yet, install https://www.google.com/chrome/browser/canary.html
*   browse chrome://flags/
*   looking for "Latest stable JavaScript features" & "Experimental JavaScript " ENABLE them
*/

// Object
const person = {
    firstName: "Aung",
    lastName: "Kyaw",
    country: "Burma",
    state: "Rangoon",
    city: "Yangon"
}
const {firstName, lastName, ...restObj} = person; 
console.log(firstName);
console.log(lastName);
console.log(restObj);

const personCopy = {firstName, lastName, ...restObj};
console.log(personCopy);

