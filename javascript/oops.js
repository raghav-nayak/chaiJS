const user = {
    userName: "Raghav",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got user details from DB : ", this.userName);
    }
}

user.getUserDetails()