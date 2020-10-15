"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var func_1 = require("./func");
var Control_js_1 = require("./Control.js");
// class Word {
//     array: string;
//     constructor(word?: string) {
//         if (word != null) {
//             this.array = word;
//         } else {
//             this.array = this.setWord();
//         }
//     }
//     setWord() {
//         let output: any;
//         output = prompt("Introduce la palabra Secreta", "Ejemplo");
//         return output;
//     }
//     searchLetter(letter: string): boolean {
//         for (let i = 0; i < this.array.length; i++) {
//             if (this.array[i] == letter) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     getWord(): string { return this.array; }
// }
// class Secret extends Word {
//     arraySecret: string[] = new Array();
//     constructor() { super(); }
//     setSecret(fail: boolean) {
//         for (let i = 0; i < this.array.length; i++) {
//             this.arraySecret[i] = "_";
//         }
//     }
//     revealLetter(fail: boolean, letter: string) {
//         if (!fail) {
//             for (let i = 0; i < this.array.length; i++) {
//                 if (this.array[i] == letter) {
//                     this.arraySecret[i] = letter;
//                 }
//             }
//         }
//     }
//     isRevealCompleted(): boolean {
//         for (let i = 0; i < this.arraySecret.length; i++) {
//             if (this.arraySecret[i] == "_") {
//                 return false;
//             }
//         }
//         return true;
//     }
//     getArraySecret(): string[] { return this.arraySecret; }
// }
// class Player {
//     constructor() { }
//     setLetter(): string {
//         let output: any;
//         let letter: string = "";
//         do {
//             output = prompt("Introduce una Letra: ", "a/z");
//             letter = output;
//         } while (letter.length != 1);
//         return letter;
//     }
// }
// class Control {
//     public count: number = 0;
//     private MAX_FAILS: number = 5;
//     private player = new Player();
//     private fail: boolean = true;
//     private secret: Secret;
//     private word: Word;
//     constructor() {
//         this.secret = new Secret();
//         this.word = new Word(this.secret.getWord());
//     }
//     printResult(completed: boolean): void {
//         if (completed) {
//             alert("enhorabuena");
//         } else {
//             alert("la proxima vez sera");
//         }
//     }
//     printSecretAndFails(secret: string[], fail: number): void {
//         alert("Llevas " + fail + " Palabra: " + secret);
//     }
//     increaseCount(fail: boolean) {
//         if (fail) {
//             this.count++;
//         }
//     }
//     isGameOver(): boolean {
//         if (this.count == this.MAX_FAILS) {
//             return true;
//         }
//         return false;
//     }
//     getPlayer(): Player { return this.player; }
//     getFail(): boolean { return this.fail; }
//     getSecret(): Secret { return this.secret; }
//     getWord(): Word { return this.word; }
// }
function play() {
    var control = new Control_js_1.Control();
    var player = control.getPlayer();
    var fail = control.getFail();
    var secret = control.getSecret();
    var word = control.getWord();
    secret.setSecret(fail);
    do {
        var letter = player.setLetter();
        fail = word.searchLetter(letter);
        secret.revealLetter(fail, letter);
        control.increaseCount(fail);
        control.printSecretAndFails(secret.getArraySecret(), control.count);
    } while (!control.isGameOver() && !secret.isRevealCompleted());
    control.printResult(secret.isRevealCompleted());
}
play();
func_1.habla();
//# sourceMappingURL=main.js.map