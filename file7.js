// '' , "" both are valid
const name = "khushi"
const repoCt = 50
console.log(name+repoCt); //+ use to concatinate khushi50 not recommended
console.log(`Hello my name is ${name} and repo count is ${repoCt}`); // string interpolation

const gameName = new String('khushigame') // another way to declare a string
console.log(gameName.__proto__); // {}
console.log(gameName.toUpperCase);
console.log(gameName.length); // charAt , indexOf etc functions os string


const subString = gameName.substring(0,4) // khus 0 to (4-1)
console.log(subString);

const sliceString =gameName.slice(-9,4) // read again about this
console.log(sliceString);

const newStr = "      papaya      \n  "; 
console.log(newStr);

console.log(newStr.trim());// removed spaces and new line

const url = "https://google.com/khushi%20chaudhary";
const updatedUrl = url.replace('%20', '-'); // Replaces only the first occurrence
console.log(updatedUrl); // Output: https://google.com/khushi-chaudhary
console.log(url.includes("hc"));

const splitString  = "khushi@web@devel oper";
console.log(splitString.split('@'));



