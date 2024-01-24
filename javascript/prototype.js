// function multiplyBy5(num) {
//     return num * 5;
// }

// multiplyBy5.power = 2;

// console.log(multiplyBy5(5)); // 25
// console.log(multiplyBy5.power); // 2
// console.log(multiplyBy5.prototype); // {} - properties of function



// function createUser(userName, score) {
//     this.userName = userName;
//     this.score = score;
// }

// createUser.prototype.increment = function () {
//     this.score++; // this is mandatory to handle instance level changes
// }

// createUser.prototype.printMe = function () {
//     console.log(`User is ${this.userName} and score is ${this.score}`)
// }

// console.log(createUser); // [Function: createUser]
// console.log(createUser.prototype); // { increment: [Function (anonymous)], printMe: [Function (anonymous)] }

// const user1 = new createUser("raghav", 25);
// const user2 = new createUser("raghaven", 30);

// console.log(user1); // createUser { userName: 'raghav', score: 25 }
// user1.printMe(); // User is raghav and score is 25




let myName = "raghav      ";

console.log(myName.length); // 12