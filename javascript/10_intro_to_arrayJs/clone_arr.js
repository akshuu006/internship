let array_5=["item1","item2","item4","asdrasf"];
// let array_2 = array_1;
let array_6=array_5.slice(1,2)

array_5.push("item3");

console.log(array_5==array_6);
console.log(array_5);
console.log(array_6);


// cloning with Concat

let array_1=["item1","item2"];
// let array_2 = array_1;
let array_2=[].concat([array_1]); 

// array_1.push("item3");
console.log(array_1==array_2);
console.log(array_1);
console.log(array_2);

// cloning with Spread Operator




let array_8=["item1","item2"];
let array_9=[...array_8];

array_8.push("item3");
console.log(array_8==array_9);
console.log(array_8);
console.log(array_9);