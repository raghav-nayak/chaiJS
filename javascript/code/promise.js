const promiseOne = new Promise((resolve, reject) => {
    // do an async task
    // e.g. DB queries,  cryptography calls, network requests
    setTimeout(() => {
        console.log("Async task1 is complete");
        resolve(); // this is must to resolve the promise
    }, 1000);
});

promiseOne.then(() => console.log("Promise1 is consumed"));

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task2 is complete");
        resolve();
    }, 500);
}).then(() => console.log("Promise2 is consumed"));


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            userName: "Raghav",
            email: "raghav@example.com"
        });
    }, 1000)
});

promiseThree.then(function (user) {
    console.log("Promise3 is consumed. Received user from promise:", user);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                userName: "Raghav",
                email: "raghav@example.com"
            });
        } else {
            reject("reject: Something went wrong")
        }
    }, 1000);
});

promiseFour.then((user) => {
    console.log("PromiseFour1 resolved: ", user);
    return user.userName;
}).then((userName) => { // if the response is successful
    console.log("PromiseFour2 resolved: ", userName);
}).catch((err) => { // if there is any error
    console.error("PromiseFour3 resolved: ", err);
}).finally(() => { // this will always be executed
    console.error("PromiseFour is either resolved or rejected");
});


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                userName: "javascript",
                email: "js@example.com"
            });
        } else {
            reject("Error: JS went wrong")
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const responseFive = await promiseFive; // note: promise is an object
        console.log("responseFive : ", responseFive);
    } catch (err) {
        console.error("Error in consumePromiseFive() : ", err);
    }
}

consumePromiseFive();


async function getAllUsers() {
    try {
        const usersApiResponse = await fetch("https://jsonplaceholder.typicode.com/users")
        const usersData = await usersApiResponse.json(); // to convert to JSON will take some time, so need an await
        console.log(usersData);
    } catch (err) {
        console.error("Error in getAllUsers() : ", err);
    }
}

getAllUsers();


fetch("https://jsonplaceholder.typicode.com/users")
    .then((userApiResponse) => {
        return userApiResponse.json();
    }).then((usersData) => {
        console.log(usersData);
    }).catch((err) => {
        console.error(err);
    });