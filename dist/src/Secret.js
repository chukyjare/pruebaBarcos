"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secret = void 0;
var Word_js_1 = require("./Word.js");
var Secret = /** @class */ (function (_super) {
    __extends(Secret, _super);
    function Secret() {
        var _this = _super.call(this) || this;
        _this.arraySecret = new Array();
        return _this;
    }
    Secret.prototype.setSecret = function (fail) {
        for (var i = 0; i < this.array.length; i++) {
            this.arraySecret[i] = "_";
        }
    };
    Secret.prototype.revealLetter = function (fail, letter) {
        if (!fail) {
            for (var i = 0; i < this.array.length; i++) {
                if (this.array[i] == letter) {
                    this.arraySecret[i] = letter;
                }
            }
        }
    };
    Secret.prototype.isRevealCompleted = function () {
        for (var i = 0; i < this.arraySecret.length; i++) {
            if (this.arraySecret[i] == "_") {
                return false;
            }
        }
        return true;
    };
    Secret.prototype.getArraySecret = function () { return this.arraySecret; };
    return Secret;
}(Word_js_1.Word));
exports.Secret = Secret;
//# sourceMappingURL=Secret.js.map