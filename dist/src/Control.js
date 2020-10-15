"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Control = void 0;
var Word_js_1 = require("./Word.js");
var Secret_js_1 = require("./Secret.js");
var Player_js_1 = require("./Player.js");
var Control = /** @class */ (function () {
    function Control() {
        this.count = 0;
        this.MAX_FAILS = 5;
        this.player = new Player_js_1.Player();
        this.fail = true;
        this.secret = new Secret_js_1.Secret();
        this.word = new Word_js_1.Word(this.secret.getWord());
    }
    Control.prototype.printResult = function (completed) {
        if (completed) {
            alert("enhorabuena");
        }
        else {
            alert("la proxima vez sera");
        }
    };
    Control.prototype.printSecretAndFails = function (secret, fail) {
        alert("Llevas " + fail + " Palabra: " + secret);
    };
    Control.prototype.increaseCount = function (fail) {
        if (fail) {
            this.count++;
        }
    };
    Control.prototype.isGameOver = function () {
        if (this.count == this.MAX_FAILS) {
            return true;
        }
        return false;
    };
    Control.prototype.getPlayer = function () { return this.player; };
    Control.prototype.getFail = function () { return this.fail; };
    Control.prototype.getSecret = function () { return this.secret; };
    Control.prototype.getWord = function () { return this.word; };
    return Control;
}());
exports.Control = Control;
//# sourceMappingURL=Control.js.map