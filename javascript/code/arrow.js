const user = {
    name: "Raghav",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.name}, welcome to website`); // Raghav, welcome to website
        console.log(this); // {
        //     name: 'Raghav', or 'Nayak'
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
    }
};

user.welcomeMessage() // Raghav, welcome to website
user.name = "Nayak"
user.welcomeMessage() // Nayak, welcome to website

console.log(this) // {} - does not have any object in global context

// if you print this in web browser, it will print window object


function sample() {
    let userName = "Raghav";
    console.log(this);
    /* output would be
    <ref *1> Object [global] {
        global: [Circular *1],
        clearImmediate: [Function: clearImmediate],
        setImmediate: [Function: setImmediate] {
          [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        clearInterval: [Function: clearInterval],
        clearTimeout: [Function: clearTimeout],
        setInterval: [Function: setInterval],
        setTimeout: [Function: setTimeout] {
          [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        queueMicrotask: [Function: queueMicrotask],
        structuredClone: [Getter/Setter],
        atob: [Getter/Setter],
        btoa: [Getter/Setter],
        performance: [Getter/Setter],
        fetch: [Function: fetch],
        crypto: [Getter]
      }
    */
    console.log(this.userName); // undefined; this works with object
}

sample();


const sampleFunc = function () {
    let userName = "Raghav";
}

// another way to write the same function is 
const sampleFunc2 = () => {
    let userName = "Raghav";
}

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3, 5)); // 8

// same thing can be written with "implicit return" way
const addTwo2 = (num1, num2) => num1 + num2;

console.log(addTwo2(3, 5)); // 8

// same thing can be written with () 
const addTwo3 = (num1, num2) => (num1 + num2);
console.log(addTwo3(3, 5)); // 8