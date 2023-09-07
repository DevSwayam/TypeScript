// Only used when you dont know what type of data you will be getting 
// With union you can mention two or more types a variable can have.

// You have to seperate them via | 


let score: number | string = 13;
score = 44;
score = "Fifty";


// 1. Complex use Case of Unions in object types
type UserDetailsWithoutId = {name: string,email:string,isActive:boolean}

type UserDetailsWithtId = {name: string,id:number,email:string,isActive:boolean}

type userCool = UserDetailsWithoutId | UserDetailsWithtId ;

let user:userCool = {name: "Cool",id:1,email:"string",isActive:false};
user = {name: "Cool",id:1,email:"string",isActive:false};

// 2. Complex use Case of Unions in functions
function takeUserInfo(user : userCool ):userCool{
    return {name: "Cool",id:1,email:"string",isActive:false};
};

takeUserInfo({name: "Cool",id:3,email:"string",isActive:false});

// 3. Limited Functionality on union
type canBeStringOrNumber = string | number;

let cool: canBeStringOrNumber = "2";

function convertToLowerCase(){
  //  cool.toLowerCase();;
}

//4. Still you can make it possible via type checking as i said typescript is 😎🆒
function convertToLowerCaseCompulsory(){
    if(typeof(cool)=== 'string' ){
        cool.toLowerCase();
    }
}



//5. Arrays with union 😵
let dataArray: number[] | string[] = ["3", "3","4" ]; // can be all strings
dataArray = [2,3,4,5]; // can be all numbers
//dataArray = ["2",2,"3"] // but cannot be mixture of both



//6. you can declare varibale which can only take 
//specific values that you have mentioned with types
let genders: "male" | "famale" | "Cannot say";
// genders = "bisexual";
