// Type Script for Objects exactly as same as JS
const user = {
    name: "Swayam",
    email: "swayamakarle2@gmail.com",
    isActive: true
}

// Type Script for Objects exactly as same as JS But the main thing is =>  how objects are passed to functions or returned by function while ensuring type Safety 

/* 1.Passing object as input to functions*/ 
function createUser({name: string, isActive: boolean}){}

/* Returning objects from function*/
function createCourse() // Basic Syntax
    :{name:string}      // Return type 
    {                   // Function definition
        return{name:"swayam"};
    }
  
// TypeScript Weirdness while passing objects as input
function CreateProfile({name: string, phoneNumber:number}){}

//1. No typeSafety for properties.
CreateProfile({name:444, phoneNumber:"swayam"});

 // CreateProfile({name:444, phoneNumber:"swayam", email:"sw@y.com"});
//2. You should not be able to pass extra parameters like above but
// You can pass it by first defining object then passing it to function
 const userProfile= {
    name:444, 
    phoneNumber:"swayam", 
    email:"sw@y.com"
 }
CreateProfile(userProfile); 

export{};