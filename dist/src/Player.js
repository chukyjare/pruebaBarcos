"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.setLetter = function () {
        var output;
        var letter = "";
        do {
            output = prompt("Introduce una Letra: ", "a/z");
            letter = output;
        } while (letter.length != 1);
        return letter;
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map