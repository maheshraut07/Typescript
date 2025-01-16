"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
console.log(addTwo(5));
console.log(getUpper("mahesh"));
console.log(signUpUser("mahesh", "rautmahesh213@gmail.com", false));
console.log(loginUser("mahesh", "rautmahesh213@gmail.com"));
var getHello = function (s) {
    return " ";
};
var heros = ["thor", "ironman", "wanda"];
// const heros = [1, 2, 3]
console.log(heros.map(function (hero) {
    return "hero is ".concat(hero);
}));
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
