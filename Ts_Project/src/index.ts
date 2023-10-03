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
class User{

    //Initialising varible => First inform the compiler that this x,y variables are of type k,l
    email:string;
    name:string;

    // Just like function only allow particular type as input parameter
    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }
}

// Making a Class out of it
const swayam = new User("0xswayam@gmail.com","Swayam");

class City{
    //city:string;  If the variable is not being initialised in constructor then you have to provide a intitalising value compulsory
    cityIs: string = "Mumbai"; // Like this

    readonly owner: string="swayam";
    constructor(){}
}
//City.owner="NotSwayam"; You cannot change the value of read only variable


//  Private and Public Modifiers
class car{
    public name:string; 
    price:string; // If you wont provide anything as a modifier then it is considered public
    private carId:number;//cannot access out of class

    constructor(name:string,carId:number, price:string){
        this.name=name;
        this.carId=carId;
        this.price=price;
    }
}

const lambo = new car("lamborgini",88,"1crore");
console.log(lambo.name);
//console.log(lambo.carId); cannot access outside class

//Another way of initialising variables in constructor 
class animal{
    constructor(public name:string, private carId:number, public price:string){
        this.name=name;
        this.carId=carId;
        this.price=price;
    }
}
