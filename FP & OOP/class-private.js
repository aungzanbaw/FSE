// check class.ts first
class EmojiPrivate {
    constructor(_icon) {
        this._icon = _icon;
    }
    // this method ensure that internal logic lock in
    get icon() {
        return this._icon;
    }
}
const unicornPrivate = new EmojiPrivate("🦄");
unicornPrivate.icon = "💩"; // mutating the class own property won't allow
console.log(unicornPrivate); // check the precomiple version on class.js
// if you want to use typescript via cli do following
// npm install typescript -g
// tsc class.ts
// node class.js
