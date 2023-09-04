// How to remove Weirdness?
// Type Alises => Creating your own(custome) type => fixes almost all weirdness of js types
// 1) Defining custom types
type User = {
    name: string,
    id:number,
    email:string,
    isActive:boolean
}

//2. Using Custom types 
// Now you can tell the function that the input/return object i should get input of type User and it should also match object's properties types. same for return
function createUser(user: User): User{
    return {
        name: "Cool",
        id:1,
        email:"string",
        isActive:false
    }
}
// calling function below
createUser({name: "Cool", id:1, email:"string", isActive:false});


//3. Trying to be cool by using TS
// So i have seen so many code bases following custom type for every data type. Lets see by example

/*
Ordinary Method
function createString(name: string): string{
    return "Swayam";
} */

// So instead of writing function like above We tried to be 🆒
// Cool method
type nameType = string;
function createString(name: nameType): nameType{
    return "Swayam";
}

export {}