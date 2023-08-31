"use strict";
/* Functions in TypeScript */
Object.defineProperty(exports, "__esModule", { value: true });
/* Bad method to write Function  Cause we can pass even string or num or whatever we want but we should get error whil writing it*/
function addTwo(num) {
    return num + 2;
}
console.log(addTwo("2")); //Not howing error for passing strign to num
/* Good method 1*/
function addTwoGood(num) {
    return num + 2;
}
console.log(addTwoGood(2)); // Showing error for passing strign to num
/* Good method 2*/
function signUpUser(name, email, password, isPaid) {
}
signUpUser("swayam", "swayam", "swayam", false);
/* Another Method for default (input_parameter: type = default_value)
So now if you dont pass any value it wont throw error cause you have one default value*/
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("swayam", "swayam");
