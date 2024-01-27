const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
const superHeroes = ["shaktiman", "naagraj"];

const myArray2 = new Array(1, 2, 3, 4, 5, 6, 7, 8);
console.log(myArray2);

const myArray3 = new Array(myArray2);
// console.log(myArray3);

myArray.push(9);
console.log(myArray);
myArray.pop();
console.log(myArray);

myArray.unshift(9); // add 9 at the beginning; it is a costly operation as it shift all the subsequent elements
console.log(myArray);

myArray.shift(); // removes the first element and shifts all the subsequent elements; like unshift, it is a costly operation
console.log(myArray);

console.log(myArray.includes(10)); // false
console.log(myArray.indexOf(20)); // -1
console.log(myArray.indexOf(8)); // 7

const newArrayString = myArray.join(); // return string
console.log(newArrayString); // 1,2,3,4,5,6,7,8

const newArray1 = myArray.slice(1, 3); // does not manipulate the original array
console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 8];
console.log(newArray1); // [2,3]

const newArray2 = myArray.splice(1, 3); // manipulates the original array; includes the end index too
console.log(myArray); // [1, 5, 6, 7, 8];
console.log(newArray2); // [2,3,4]


const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeroes[3]); // [ 'superman', 'flash', 'batman' ]

let allHeroes = marvelHeroes.concat(dcHeroes); // returns new array
console.log(allHeroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

let newHeroes = [...marvelHeroes, ...dcHeroes]; // ... is called spread operator 
console.log(newHeroes);

// flat -> to convert n dimensional arrays into single dimensional array
let nDimArray = [1, 2, [3, 4, 5], 6, [7, 8, [9, 10]]];
let flatArray1 = nDimArray.flat();
console.log(flatArray1); // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ] ]
let flatArray2 = nDimArray.flat(Infinity);
console.log(flatArray2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// isArray -> To check whether given variable is array or not
console.log(Array.isArray(nDimArray)); // true
console.log(Array.isArray("Raghav")); // false

// from -> to convert a variable in to an array
console.log(Array.from("Raghav")); // [ 'R', 'a', 'g', 'h', 'a', 'v' ]
console.log(Array.from({
    name: "Raghav"
})); // [ ]


// of -> used to create an array with variables
let score1 = 99;
let score2 = 98;
let score3 = 100;
console.log(Array.of(score1, score2, score3)); // [ 99, 98, 100 ]