// Use Tuples when you want a sprcific type values
// Can be used in API 
// suppose that your api return index , list of users and whether they are active are not then you can use below Type

let TupleUser: [number, string[], boolean];
// This tells that TupleUser Array should be of length 3 
// On index 0 => Value should be type number
// On index 1 => Value should be type array of string
// On index 2 => Value should be type bolean

TupleUser=[ 66,["Swayam","Abhishek","Ayush"], false ];

// another way to define Tuple
type ColourTupleType = [string, number, number, number ];

const red:ColourTupleType = ["red", 250,0,0];