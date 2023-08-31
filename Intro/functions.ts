/* Functions in TypeScript */
/* Aim : 
1) Making sure that functio gets the inputs with perfect types
2) Making sure that function returns what we expect the function to return */

/* Bad method to write Function  Cause we can pass even string or num or whatever we want but we should get error whil writing it*/
function addTwo(num){
    return num+2;
}
console.log(addTwo("2")); //Not Throwing error for passing strign to num

/* Good method 1*/
function addTwoGood(num: number){
    return num+2;
}
console.log(addTwoGood(2)); // Showing error for passing strign to num

/* Good method 2*/
function signUpUser(name: string, email: string,password: string, isPaid: boolean ){
}
signUpUser("swayam","swayam","swayam",false);

/* Another Method for default (input_parameter: type = default_value) 
So now if you dont pass any value for third input it wont throw error cause you have one default value*/
let loginUser = (name: string, email: string, isPaid: boolean = false)=>{
}
loginUser("swayam","swayam");


// So as this function tells it should return number but its returning string and it is also not preferred way to write function if your function is returning something
function returnNumberBad(num: number)
{return "2";}

// instead you can define what type of value you gonna retuen bt using (): type_name {} 
function returnNumberGood(num: number): number{return 2;}

const returnTwo = ():number=>{
    return 2;
}

// Map function with arrays
const names = ["Swayam", "Ayush", "Abhishek"]
names.map((key:string): string => {
    return key;
});

// Whenever you know that functional should not return something then return type should be declared as void
function consoleError(errorMsg): void{
    console.log(errorMsg);
}

// Whenever you wanna handle error by a function and you expects it to terminate the execution of prgram or throw an exception then we use never as return type and in this case you have to throw error or terminate execution
function handleError(errorMsg): never{
    throw new Error(errorMsg);
}

export{};
