"use strict";
//JS way
/*
class UserJS{
    constructor(email,name){
        this.email=email;
        this.name=name;
    }
}
*/
// TS way
class User {
    // Just like function only allow particular type as input parameter
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
// Making a Class out of it
const swayam = new User("0xswayam@gmail.com", "Swayam");
class City {
    constructor() {
        //city:string;  If the variable is not being initialised in constructor then you have to provide a intitalising value compulsory
        this.cityIs = "Mumbai"; // Like this
        this.owner = "swayam";
    }
}
//City.owner="NotSwayam"; You cannot change the value of read only variable
//  Private and Public Modifiers
class car {
    constructor(name, carId, price) {
        this.name = name;
        this.carId = carId;
        this.price = price;
    }
}
const lambo = new car("lamborgini", 88, "1crore");
console.log(lambo.name);
//console.log(lambo.carId); cannot access outside class
//Another way of initialising variables in constructor 
class animal {
    constructor(name, carId, price) {
        this.name = name;
        this.carId = carId;
        this.price = price;
        this.name = name;
        this.carId = carId;
        this.price = price;
    }
}
