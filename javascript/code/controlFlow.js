if (2 == "2") {
    console.log("Within if");
}
else {
    console.log("Within else");
}

if (2 === "2") {
    console.log("Within if");
} else {
    console.log("Within else");
}

const balance = 200;
if (balance < 500) console.log("Balance is less than 500"),
    console.log("Balance should be greater than 500");

const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default");
        break;
}


let userEmail = "raghav@xyz.com";
if (userEmail) {
    console.log("Email: " + userEmail);
} else {
    console.log("Email id is missing");
}

let myArray = [];
if (myArray.length === 0) {
    console.log("array is empty");
} else {
    console.log("array is not empty");
}

const myObj = {}
if (Object.keys(myArray).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}


let val1;
val1 = 5 ?? 10;
console.log(val1); // 5
val1 = null ?? 10; 
console.log(val1); // 10
val1 = undefined ?? 10;
console.log(val1); // 10
val1 = null ?? 10 ?? 20;
console.log(val1); // 10

let val = 100;
val < 80 ? console.log("less than 80") : console.log("greater than 80"); // greater than 80