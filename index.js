const path = require("path");
const fs = require("fs");

console.log(process.argv);
const input = process.argv.slice(2);

const text = input.join(" ").concat("\n");
const timestamp = new Date().toLocaleString()

const message = `${text}, ${timestamp}, \n`

if(!message){
    console.log("❌, Please provide your text here");
    console.log("Example: index.js Give input like this");
    process.exit(1);
}

const filePath = path.join(__dirname, "log.txt");
fs.appendFile(filePath, message, {encoding: "utf-8"}, ()=> {
    console.log("Text added successfully")
})
console.log(filePath);

console.log(text);
console.log(input);