// check class.ts
// check class-private.ts
class Emoji {
    constructor(_icon) {
        this._icon = _icon;
    }
    get icon() {
        return this._icon;
    }
    get prev() {
        return this._prev;
    }
    change(val) {
        this._prev = this._icon;
        this._icon = val;
    }
}
const unicorn = new Emoji("🦄");
console.log(unicorn.icon, unicorn.prev); // prev val is undefiend as there is not modification yet
unicorn.change("⚛");
unicorn.change("💎");
unicorn.change("λ");
console.log(unicorn.icon, unicorn.prev); // current icon set to λ and prev value is 💎
// if you want to use typescript via cli do following
// npm install typescript -g
// tsc class-histroy.ts --target ES2016
// node class-history.js
