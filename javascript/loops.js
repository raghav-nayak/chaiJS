array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

for (let i = 0; i < 10; i++) {
    console.log(`Outer loop: ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`\tInner loop: ${j}`);
    }
}

const myArr = [1, 2, 3, 4, 5];
for (const num of myArr) {
    console.log(num);
}

const greetings = "Hello, world";
for (const letter in greetings) {
    console.log(letter); // 0, 1, 2 ...
    console.log(greetings[letter]); // H, e, l ...
}

for (const letter of greetings) {
    console.log(letter); // H, e, l ...
}

let map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("FR", "France");
map.set("GB", "Great Britain");

console.log(map);
// Map(4) {
//     'IN' => 'India',
//     'US' => 'United States',
//     'FR' => 'France',
//     'GB' => 'Great Britain'
//   }

for (const item of map) {
    console.log(item);
}
// [ 'IN', 'India' ]
// [ 'US', 'United States' ]
// [ 'FR', 'France' ]
// [ 'GB', 'Great Britain' ]

for (const [key, val] of map) {
    console.log(`${key} -> ${val}`);
}
// IN -> India
// US -> United States
// FR -> France
// GB -> Great Britain

let myGameObj = {
    "game1": "NFS",
    "game2": "Spiderman",
}

// for (const [key, val] of myGameObj) {
//     console.log(key, "->", val);
// }
//output :
//TypeError: myGameObj is not iterable

for (const key in myGameObj) {
    console.log(key);
}
// output:
// game1
// game2

for (const key in myGameObj) {
    console.log(`${key} -> ${myGameObj[key]}`);
}
// output:
// game1 -> NFS
// game2 -> Spiderman


const languages = ["js", "cpp", "java", "python", "ruby", "swift"]

// forEach takes a callback function
// callback function does not have a name
languages.forEach(function (item) {
    console.log(item);
})
// output:
// js
// cpp
// java
// python
// ruby
// swift

// another way to write the same code
languages.forEach((item) => {
    console.log(item);
})

function printMe(item) {
    console.log(item);
}
languages.forEach(printMe);

// forEach also gives individual item, index of that item and complete array
languages.forEach((item, index, array) => {
    console.log(item, " : ", index, " : ", array);
});
// output:
// js  :  0  :  [ 'js', 'cpp', 'java', 'python', 'ruby', 'swift' ]
// cpp  :  1  :  [ 'js', 'cpp', 'java', 'python', 'ruby', 'swift' ]
// java  :  2  :  [ 'js', 'cpp', 'java', 'python', 'ruby', 'swift' ]
// python  :  3  :  [ 'js', 'cpp', 'java', 'python', 'ruby', 'swift' ]
// ruby  :  4  :  [ 'js', 'cpp', 'java', 'python', 'ruby', 'swift' ]
// swift  :  5  :  [ 'js', 'cpp', 'java', 'python', 'ruby', 'swift' ]



const myObjArray = [{
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "c plus plus",
        languageFileName: "cpp"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myObjArray.forEach((obj) => {
    console.log(obj);
});
// output:
// { languageName: 'javascript', languageFileName: 'js' }
// { languageName: 'java', languageFileName: 'java' }
// { languageName: 'c plus plus', languageFileName: 'cpp' }
// { languageName: 'python', languageFileName: 'py' }

myObjArray.forEach((obj) => {
    console.log(obj.languageFileName);
});
// output:
// js
// java
// cpp
// py



const values = languages.forEach((item) => {
    console.log(item);
})

console.log(values); // undefined; forEach does not return anything

