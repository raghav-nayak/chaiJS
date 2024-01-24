// let a = 300;

// if (true) {
//     let a = 10;
//     const b = 20;
//     c = 30;
// }

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30


function one() {
    const userName = "Raghav";

    function two() {
        const website = "youtube";
        console.log(userName);
    }
    
    // console.log(website); // ReferenceError: website is not defined

    two();
}

one();


function addOne(num) {
    return num + 1;
}

const addTwo = function(num){  // expression -> this way of creation of a function
    return num + 2;
}

addOne(10);
addTwo(20); 

