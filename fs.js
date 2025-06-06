const fs = require("fs");

const data = fs.readFileSync("./fs.txt", {encoding: "utf-8"});
console.log(data);