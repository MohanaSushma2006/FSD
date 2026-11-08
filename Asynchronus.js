import  fs from "fs";
const data="hello this is sample text to demostrate file operations";
fs.writeFile("sample.txt", data, "UTF-8",(error)=>{
    if(error){
        return console.log(error);
    }
    console.log(`data written successfully`);
    fs.readFile("sample.txt", "UTF-8",(error,readData)=>{
        if(error){
            return console.log(error);
        }
        console.log("file content:");
        console.log(readData);
        fs.appendFile("sample.text","\n welcome to FSD-Lab", "UTF-8",(error)=>{
            if(error){
            return console.log(error);
        }
        console.log("Data appended successfully");
        });
    });
});