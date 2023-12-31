// Just like type but interface
// Interface forces you to use the methods that are mentioned but it wont care about what logic i am gonna write in the interface letter.Just like GFORM required field

interface User {
    name: string,
    email: string,
    userId: number,
    readonly number: number,
    age?: number,
    calculateLifeSpan(num:number):number // can add method in interfaces 
}
/*
const swayam: User = {
    name: "Swayam",
    email: "swayamkarle@gmail.com",
    userId: 5,
    number: 9956789034,
    calculateLifeSpan: (num)=>{
        return num;
    },
}
*/

// interfaces vs Types
// 1. Type cannot be opened again
// 2. Inheritane is allowed in Interfaces

// 1. Re opening Interfaces in TypeScript
// You want to add properties to interfaces which is previously defined
// useCase: when you import interface which are already written then you want to add extra functionality to it

interface User {
    // Previous properties will be same
    githubId: string // New Addition
}

const swayamReopened: User = {
    name: "Swayam",
    email: "swayamkarle@gmail.com",
    userId: 5,
    number: 9956789034,
    calculateLifeSpan: (num)=>{
        return num;
    },
    githubId:"Cool.id"
}


 // 2. inheritance in interfaces  
interface Admin extends User{
    // All Funtionaluty Same
    role: string, // New property Added
}

const swayamAdmin: Admin = {
    name: "Swayam",
    email: "swayamkarle@gmail.com",
    userId: 5,
    number: 9956789034,
    calculateLifeSpan: (num)=>{
        return num;
    },
    githubId:"Cool.id",
    role:"Admin"
}