function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {} - properties of function



function createUser(userName, score) {
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++; // this is mandatory to handle instance level changes
}

createUser.prototype.printMe = function () {
    console.log(`User is ${this.userName} and score is ${this.score}`)
}

console.log(createUser); // [Function: createUser]
console.log(createUser.prototype); // { increment: [Function (anonymous)], printMe: [Function (anonymous)] }

const user1 = new createUser("raghav", 25);
const user2 = new createUser("raghaven", 30);

console.log(user1); // createUser { userName: 'raghav', score: 25 }
user1.printMe(); // User is raghav and score is 25




let superHeros = ["Batman", "Superman"];

let superHeroPower = {
    batman: "invisible",
    superman: "flying",

    getSupermanPower: function () {
        console.log("Superman power is ", this.superman);
    }
}

// this will be inherited by all objects
Object.prototype.allPowers = function () {
    console.log("All powers are present");
}

superHeros.allPowers(); // All powers are present
superHeroPower.allPowers(); // All powers are present

Array.prototype.arrayCustomFunction = function () {
    console.log("Array custom function is available");
}

superHeros.arrayCustomFunction(); // Array custom function is available
superHeroPower.arrayCustomFunction(); // Error: TypeError: superHeroPower.arrayCustomFunction is not a function




const User = {
    name: "Raghav",
    email: "raghav@example.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: true,
    fullTime: true,
    __proto__: TeachingSupport
}

// old approach
Teacher.__proto__ = User

// modern approach
Object.setPrototypeOf(Teacher, User)







let myName = "raghav      ";

console.log(myName.length); // 12

String.prototype.trueLength = function () {
    console.log(this);
    console.log("True length is ", this.trim().length);
}

myName.trueLength();
// [String: 'raghav      ']
// True length is  6

"raghaven".trueLength();
// [String: 'raghaven']
// True length is  8