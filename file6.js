// primitive and non primitive data type(diff on basis of how to store data in memory and how to acces )
// primitive(call by value) - 7 types - string, number, boolean, null, undefined, symbol(for unique), BigInt

// non primitive(call by refernece) - Array, objects, functions

// JS is a dynamically typed language (data type declaration is not required)

const score = 43;
const scoreVal = 54.5; // both are numbers (not float in js)

const iLogged = false;
const temp = null;

let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

const bigNumber = 67556454687899877645888888888888888; // data type will use BigInt
console.log(bigNumber);
const fruits = ["apple", "mango", "banana", "kiwi", "papaya"]; // array
const obj = [
  {
    name: "khushi",
    age: 20,
    designation: "SE",
  },
  {
    name: "nitish",
    age: 21,
    designation: "SE",
    dresses: {
      winter : "jacket",
      summer : "top"
    }
  },
];
console.log(obj[1].dresses.winter); // accessing of object of object 

obj.forEach((ele) => {
  console.log(ele);
});

const myFunc  = function(){
    console.log("Hello World");
}
console.log(typeof(myFunc)); // object function 
console.log(typeof(fruits)); // object 


//null - typeof -> object
// undefined - typeof -> object
// array - typeof -> object