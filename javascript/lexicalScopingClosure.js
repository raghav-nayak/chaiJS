/*
function outer() {
    let userName = "ramukaka";
}
console.log(userName); // ReferenceError: userName is not defined
*/


/*
function outer() {
    let outerVariable = "outer";

    function inner() {
        console.log(userName);
    }
    inner();
}

outer();
// output
// ramukaka
*/

/*
function outer() {
    let outerVariable = "outer";

    function innerOne() {
        let innerOneVariable = "innerOne";
        console.log(outerVariable);
        console.log(innerOneVariable);
    }

    function innerTwo() {
        let innerTwoVariable = "innerTwo";
        console.log(outerVariable);
        console.log(innerTwoVariable);
        console.log(innerOneVariable);
    }

    innerOne();
    innerTwo();
}

outer();
// output:
// outer
// innerOne
// outer
// innerTwo
// /Users/raghavnayak/Developer/Programming/chaiAurCode/javascript/lexicalScopingClosure.js:38
// console.log(innerOneVariable);

// ReferenceError: innerOneVariable is not defined

*/




function displayNameFunction() {
    const name = "Ramukaka";

    function displayNameInnerFunction() {
        console.log(name);
    }

    return displayNameInnerFunction;
}

const displayNameFunctionObj = displayNameFunction();
displayNameFunctionObj();
// output
// Ramukaka