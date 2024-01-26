console.log(Math.PI) // 3.141592653589793
Math.PI = 4;
console.log(Math.PI) // 3.141592653589793

const piDescriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(piDescriptor);
// output:
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

const student = {
    name: "Mark",
    class: "2nd year",
    isPresent: false
}

console.log(student);
// output:
// {
//     name: 'Mark',
//     class: '2nd year',
//     isPresent: false
// }

console.log(Object.getOwnPropertyDescriptor(student)); // undefined

console.log(Object.getOwnPropertyDescriptor(student, "name"));
// output:
// {
//     value: 'Mark',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

for (let [key, value] of Object.entries(student)) {
    console.log(`${key} => ${value}`);
}
// output:
// name => Mark
// class => 2nd year
// isPresent => false


// modify the properties
Object.defineProperty(student, "name", {
    enumerable: false
});
console.log(Object.getOwnPropertyDescriptor(student, "name"));
// output:
// {
//     value: 'Mark',
//     writable: false,
//     enumerable: false,
//     configurable: true
// }


for (let [key, value] of Object.entries(student)) {
    console.log(`${key} => ${value}`);
}
// output
// class => 2nd year
// isPresent => false


student.name = "Steve";
console.log(student);
// output:
// {
//     class: '2nd year',
//     isPresent: false
// }