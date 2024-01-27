// try this in V8-debug engine in the terminal
// const myArr = [];
// %DebugPrint(myArr);






const arrTwo = [1, 2, 3, 4, 5]; // continuous array
const arrThree = [1, 2, , 4, 5]; // holey array

arrTwo.push(6.0);
arrTwo.push("h");
arrTwo[10] = 11;

console.log(arrTwo); // [ 1, 2, 3, 4, 5, 6, 'h', <3 empty items>, 11 ]
console.log(arrTwo.length); // 11
console.log(arrTwo[9]); // undefined
console.log(arrTwo[19]); // undefined

const arrFour = new Array(3);
// as of now, 3 HTMLOListElement.So, HOLEY_SMI_ELEMENTS

arrFour[0] = "1"; // Now, it is HOLEY_ELEMENTS as a string is inserted
arrFour[1] = "2"; // still it is HOLEY_ELEMENTS
arrFour[2] = "3"; // still it is HOLEY_ELEMENTS

// best way is 
const arrFive = [];
arrFive.push("1"); // PACKED_ELEMENTS
arrFive.push("2"); // PACKED_ELEMENTS
arrFive.push("3"); // PACKED_ELEMENTS


const arrSix = [1, 2, 3, 4, 5]; // SMI_ELEMENTS
arrSix.push(Nan); // PACKED_DOUBLE
arrSix.push(Infinity); // PACKED_DOUBLE