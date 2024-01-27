class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `abc${this.password}xyz`
    }

    capitalizeUserName() {
        return `${this.userName.toUpperCase()}`
    }
}

const user1 = new User("raghav", "raghav@example.com", "test123");

console.log(user1.encryptPassword()); // abctest123xyz
console.log(user1.capitalizeUserName()); // RAGHAV


/////////////////////////////////

// internally, it works like this

function UserFun(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
}

UserFun.prototype.encryptPassword = function () {
    return `abc${this.password}xyz`
}

UserFun.prototype.capitalizeUserName = function () {
    return `${this.userName.toUpperCase()}`
}

const user2 = new UserFun("raghaven", "raghav@example.com", "test1234");

console.log(user2.encryptPassword()); // abctest1234xyz
console.log(user2.capitalizeUserName()); // RAGHAVEN





class SchoolUser {
    constructor(userName) {
        this.userName = userName;
    }

    logMe() {
        console.log("Username ", this.userName);
    }
}

class Teacher extends SchoolUser {
    constructor(userName, email, password) {
        super(userName);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course is added by ${this.userName}`);
    }
}

const teacher1 = new Teacher("Rancho", "rancho@example.com", "chhachhad");
teacher1.logMe(); // Username  Rancho
teacher1.addCourse(); // A new course is added by Rancho


const teacher2 = new SchoolUser("Farhan");
teacher2.logMe();

console.log(teacher1 === teacher2); // false
console.log(teacher1 == teacher2); // false
console.log(teacher1 == Teacher); // false
console.log(teacher1 instanceof Teacher); // true
console.log(teacher1 instanceof SchoolUser); // true