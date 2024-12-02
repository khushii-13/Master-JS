const accId = 434677;
let accEmail = "khushi@gmail.com";
var accName = "khushi";
accCity = "jaipur"; // it is possible, but not preferable
//accId =98999  // not allowed
let accState; //undefined

accEmail = "khushi12@gmail.com";
accName = "khushi chaudhary";
/* var vs let (scope issue) , preffered not tpuse var beacuse of issue in vloack & functional scope */
console.table([accId, accEmail, accName, accCity, accState]);