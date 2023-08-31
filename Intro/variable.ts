// How to declare variable with type
 
/* Primitve Types
 string - Boolean - number */

// Javascript simply dosent have a runtime integer value or float value everything is counted as simply no

// number
let myNum = 6; 
let futureNum: number ;

// boolean
let isLoggedIn: boolean = false;

// string
let variable: string = "Swayam";


/* type Inference */

let assignNumNow = 6; // When you directly assign variable a value then TS is smart enough to recognize/inference the type of variable

let assignNumInFuture: number ; //But when you wanna use a variable in future that should must have only num value then you should assign type to it

/* Any Bad Practice 
 Use when we want the value to not have a type Check errors */

let hero;

function getHero(){
    return "hero back";
}

hero = getHero(); // Type is any it can take any type of value

/* Why Bad? 
Suppose that in your front end an api returns some string values but and you want to make sure those values are always string then TS si useful but you are wasting TS potential by removing type safety*/

/* There is another way noImplicitAny */

