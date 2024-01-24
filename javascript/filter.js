const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums1 = myNums.filter((num) => num > 4);
console.log(newNums1); // [ 5, 6, 7, 8, 9, 10 ]; implicit return in this case

const newNums2 = myNums.filter( (num) => { 
    num > 4;
});
console.log(newNums2); // []

const newNums3 = myNums.filter( (num) => { 
    return num > 4;
});
console.log(newNums3); // [ 5, 6, 7, 8, 9, 10 ]; explicit return in this case

//using forEach
const newNums4 = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNums4.push(num);
    }
})
console.log(newNums4); // [ 5, 6, 7, 8, 9, 10 ]



////////////////////////////////

const newNum5 = myNums.map((num) => num + 10);
console.log(newNum5); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// chaining
const newNum6 = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);
console.log(newNum6); // [41,  51, 61, 71, 81, 91, 101]



// reduce
const numbersArray = [1, 2, 3, 4, 5];

const total1 = numbersArray.reduce(function (acc, curVal) {
    console.log(`acc: ${acc} and curVal: ${curVal}`);
    return acc + curVal;
}, 0);
console.log(total1); // 15

const total2 = numbersArray.reduce((acc, curVal) => {
    return acc + curVal;
}, 0);
console.log(total2); // 15


const total3 = numbersArray.reduce((acc, curVal) => acc + curVal, 0);
console.log(total3); // 15
