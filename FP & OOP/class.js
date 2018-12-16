var Emoji = /** @class */ (function () {
    function Emoji(icon) {
        this.icon = icon;
    }
    return Emoji;
}());
var unicorn = new Emoji("🦄");
unicorn.icon = "💩";
console.log(unicorn); // check the precomiple version on class.js
// if you want to use typescript via cli do following
// npm install typescript -g
// tsc class.ts
// node class.js
