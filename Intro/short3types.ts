// 1. Readonly
// By defining a variable or a property with read only you wont be able to change it after intialised. It only provides read only access.
type User = {
    readonly _id: string,
    name : string,
    email: string,
    isActive: boolean
}

let myUser : User ={
    _id: "string2344b35tgrfg", // We can create a varible with type
    name : "Swayam",
    email: "swayamkarle@gmail.com",
    isActive: true
}

myUser.isActive = false;// Allowed
myUser.name= "Swayammm"// Allowed
myUser.email = "Swayamuncool@gmail.com"; // Allowed
// But you cannot change its value once it is assigned Example below
/*myUser._id = "coolBeingUncool2ewrndjkb"; // Not Allowed*/


// 2. optional
// You can define a variable or a property as optional.

type UserOptional = {
    _id: string,
    name : string,
    email: string,
    isActive: boolean,
    creditCard_id ?: string
}

let myUserWithoutCreditCard : UserOptional ={
    _id: "string2344b35tgrfg", 
    name : "Swayam",
    email: "swayamkarle@gmail.com",
    isActive: true
    // we havent provided creditCard_id and still its not showing any error
}

//3. Mix and Match of types
// Using existing types to create new type and appending a new type 

type cardNumber = {
    cardNumber: number
};

type cardName = {
    cardName: string
};

type cardDetail = cardName & cardNumber & {cardHash: string };

let cardOfUser : cardDetail = {
    cardName: "CoolCard",
    cardNumber: 45465,
    cardHash: "string34343"
}
