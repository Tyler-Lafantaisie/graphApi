import fs from "fs";
const file:string = "ShootingData.json";
fs.readFile(file, "utf8", (err, data)=>{
    if(err){
        console.error(err);
        return;
    }
console.log(data);
});
