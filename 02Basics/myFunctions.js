"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password) { }
var loginUSer = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myVal = addTwo(5);
getUpper("akash");
signUpUser("akash", "abc@gmail.com", "abcde");
loginUSer("a", "a@A.com");
// function getValue(myVal: number) : boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }
// Arrow function way
var getHello = function (s) {
    return "";
};
var Heros = ["thor", "ironman", "hulk"];
Heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errms) {
    console.log(errms);
}
// Some functions never return a value
// never type
function handleError(errmsg) {
    throw new Error(errmsg);
}
