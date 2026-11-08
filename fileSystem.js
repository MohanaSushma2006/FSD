import fs from 'fs';
const data="Hello this is my operations file an operation";
fs.writeFileSync("Sample.txt", data, "utf-8");
const readData=fs.readFileSync("sample.txt","utf-8");
console.log(readData);
fs.appendFileSync("sample.txt","\n This is a append line","utf-8");
const updatedData=fs.readFileSync("sample.txt", "utf-8");
console.log(updatedData);
//fs.unLinkSync("sample.txt");