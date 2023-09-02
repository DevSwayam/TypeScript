"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type Script for Objects exactly as same as JS
var user = {
    name: "Swayam",
    email: "swayamakarle2@gmail.com",
    isActive: true
};
// But the main thing is =>  how objects are passed to functions while ensuring type Safety 
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
// ^This is how you will take input for objects in functions 
// Now you cant pass wrong object value to the function as we have type safety on input
//wrong way
createUser({ name: "swayam", isActive: false });
createUser();
// right way
createUser({ name: "swayam", isActive: true });
