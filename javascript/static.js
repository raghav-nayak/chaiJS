class User {
    constructor(userName) {
        this.userName = userName;
    }

    logMe() {
        console.log(`Username: ${this.userName}`);
    }

    static createId() {
        return `123`
    }
}

const user1 = new User();
// console.log(user1.createId());

class Teacher extends User {
    constructor(userName, email) {
        super(userName);
        this.email = email;
    }
}

const teacher1 = new Teacher("teacher1", "teacher1@example.com");
console.log(teacher1); // Teacher { userName: 'teacher1', email: 'teacher1@example.com' }
teacher1.logMe(); // Username: teacher1
teacher1.createId(); // Error: TypeError: user1.createId is not a function