/* Functions in TypeScript */
/* Aim : 
1) Making sure that functio gets the inputs with perfect types
2) Making sure that function returns what we expect the function to return */

/* Bad method to write Function  Cause we can pass even string or num or whatever we want but we should get error whil writing it*/
function addTwo(num){
    return num+2;
}
console.log(addTwo("2")); //Not howing error for passing strign to num

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
So now if you dont pass any value it wont throw error cause you have one default value*/
let loginUser = (name: string, email: string, isPaid: boolean = false)=>{
}
loginUser("swayam","swayam");

export{};
