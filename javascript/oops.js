const user = {
    userName: "Raghav",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got user details from DB : ", this);
    }
}

user.getUserDetails();

// const promiseOne = new Promise();
// const date = new Date();


function User(userName, loginCount, signedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function () {
        console.log("Greeting from User ", this.userName);
    }
}

const userOne = new User("raghav", 12, true);
const userTwo = new User("raghavan", 11, false);
console.log("userOne: ", userOne);
console.log("userTwo: ", userTwo);
userTwo.greeting();


console.log("constructor: ", userTwo.constructor);