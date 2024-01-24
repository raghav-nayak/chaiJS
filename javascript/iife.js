(function connection() {
    console.log("DB connection established");
})();


(() => {
    console.log("DB connection closed");
})();

((name) => {
    console.log(`Hello ${name}, welcome to Javascript world`);
})("Raghav"); 