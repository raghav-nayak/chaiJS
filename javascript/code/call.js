/*
function setUserName(userName) {
    console.log("setUserName is called with ", userName);
    this.userName = userName;
}

function createUser(userName, email, password) {
    setUserName(userName);
    this.email = email;
    this.password = password;
}

const userName1 = new createUser("raghav", "raghav@example.com", "test@123");
console.log(userName1);
*/

// correct way to write this function
function setUserName(userName) {
    console.log("setUserName is called with ", userName);
    this.userName = userName;
}

function createUser(userName, email, password) {
    setUserName.call(this, userName);
    this.email = email;
    this.password = password;
}

const userName1 = new createUser("raghav", "raghav@example.com", "test@123");
console.log(userName1);