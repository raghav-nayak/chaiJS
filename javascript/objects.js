const mySymbol = Symbol("key1");

let myObj = {
    fName: "Raghav",
    lName: "Nayak",
    "full Name": "Raghav Nayak",
    age: "16",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    [mySymbol]: "myKey1", // to refer symbol in the object, you need to use []
}

console.log(myObj);

console.log(myObj.fName);
console.log(myObj["lName"]); // another way to access object properties
console.log(myObj["full Name"]); // this is useful when a property has a space

// Object.freeze(myObj); // to freeze the object; this won't give any errors if you try to edit the object

myObj.email = "raghavn@gmail.com";

myObj.greeting = function () {
    console.log("Greeting from JS");
};

console.log(myObj);

console.log(myObj.greeting); // greeting: [Function (anonymous)]
myObj.greeting(); // Greeting from JS

myObj.greetingTwo = function () {
    console.log(`Greetings from JS, ${this.fName}`);
};

console.log(myObj.greetingTwo); // greeting: [Function (anonymous)]
myObj.greetingTwo(); // Greetings from JS, Raghav




const facebookUser = new Object();
console.log(facebookUser); // {}

const twitterUser = {};
console.log(twitterUser); // {}



const regularUser = {
    email: "user@gmail.com",
    fullName: {
        userFullName: {
            fName: "raghav",
            lName: "nayak"
        }
    }
};

console.log(regularUser.fullName); // { userFullName: { fName: 'raghav', lName: 'nayak' } }
console.log(regularUser.fullName.userFullName.fName); // raghav

// ? will help us to access the value only if it exists; otherwise gives undefined; otherwise you have to use if conditions
console.log(regularUser.fullsName?.userFullName.fName); // undefined


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = { obj1, obj2 };
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// creating object from existing objects
// newObject = assign(targetObj, sourceObj1, sourceObj2)

// const obj4 = Object.assign(obj1, obj2);
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } ; modifies obj1

// const obj5 = Object.assign({}, obj1, obj2); 
// console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1); // { '1': 'a', '2': 'b' } ; does not modify obj1

const obj6 = { ...obj1, ...obj2 };
console.log(obj6);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        name: "John",
    },
    {
        id: 2,
        name: "Jackson",
    },
    {
        id: 3,
        name: "Robert",
    }
]

console.log(users[0].name); // John

console.log(Object.keys(regularUser)); // [ 'email', 'fullName' ]

console.log(Object.values(regularUser));    //[
                                            //     'user@gmail.com',
                                            //     { userFullName: { fName: 'raghav', lName: 'nayak' } }
                                            //   ]

console.log(Object.entries(regularUser));   // [
                                            //     [ 'email', 'user@gmail.com' ],
                                            //     [ 'fullName', { userFullName: [Object] } ]
                                            //   ]

console.log(regularUser.hasOwnProperty("email")); // true
console.log(regularUser.hasOwnProperty("emails")); // false



const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
};

console.log(course.courseInstructor); // hitesh

// another way using destructuring (using {})
const { courseInstructor } = course;
console.log(courseInstructor); // hitesh

// you can give any other name too
const { courseInstructor:instructor } = course;
console.log(instructor); // hitesh

