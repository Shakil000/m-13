const fs = require("fs");

const readFile = "I am learning read file system using node js.Because I love to do coding.Now its working fine."

fs.writeFileSync("./fsread.txt", readFile);

const data = fs.readFileSync("./fsread.txt", {encoding: "utf-8"});

console.log(data);

// ! 13-3 Asynchronous way to read and write files 3.17s