import fs from "fs";
fs.writeFileSync("file.txt", "welcome to node.js");
console.log("file create sucessfully");
const data=fs.readFileSync("file.txt","UTF-8");
console.log(data);
fs.appendFileSync("file.txt","welcome the fsd lab");
console.log("Data append");
//fs.unLinkSync("file.txt");
//console.log("file deleted");