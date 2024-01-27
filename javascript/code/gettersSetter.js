class ClassBasedUser {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {
        this._password = value
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        return this._email = value;
    }
}

const classBasedUserObj = new ClassBasedUser("ramuRaka@example.com", "jarvis");
console.log(classBasedUserObj.password);
console.log(classBasedUserObj.email);
console.log(classBasedUserObj._password);




// earlier way: property based getters and setters through properties
function PropertyBasedUser(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this.email = value;
        }
    });

    Object.defineProperty(this, "password", {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this.password = value;
        }
    });
}

const propertyBasedUserObj = new PropertyBasedUser("sonOfRamuKaka@example.com", "harvis");
console.log(propertyBasedUserObj.email);
console.log(propertyBasedUserObj.password);








// object-based getters and setters
const ObjectBasedUser = {
    _email: "grandsonOfRamuKaka@example.com",
    _password: "karvis",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
}

const objectBasedObj = Object.create(ObjectBasedUser);
console.log(objectBasedObj.email);