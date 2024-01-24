// function addTwoNumbers(number1, number2) { // number1 and number2 are parameters
//     let result = number1 + number2;
//     return result;
// }

// const result = addTwoNumbers(2, 3);
// console.log(result);

// function loginUserMessage(userName = "Sam") {
//     // if (userName === undefined) {
//     //     console.log("Please enter  user name");
//     //     return
//     // }
//     if (!userName) { // undefined and "" are treated as false
//         console.log("Please enter  user name");
//         return;
//     }
//     return `${userName} just logged in`;
// }

// const returnValue = loginUserMessage("Raghav");
// console.log(returnValue);

// console.log(loginUserMessage());

// function calculateCardPrice(...nums) {
//     return nums;
// }
// console.log(calculateCardPrice(100, 200, 300)) //[ 100, 200, 300 ]

function calculateCardPrice(num1, num2,...nums) {
    return nums;
}
console.log(calculateCardPrice(100, 200, 300, 400)) // [ 300, 400 ]

