"use strict";

function sayAlice() {
    let residentEvil = function() { console.log(alice); } 
    let alice = 'Welcome from Umbrella cop, Alice';
    return residentEvil;
}
sayAlice()();