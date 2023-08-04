// ToDo:
// put json data in an object and format it
    //put data in mulitpe strings
    //wrape data in curlybaraces
    //write the data to the json file.
// clean data
    // remove all /n and /t's from json file
    // remove all unrelevent data
// reformat all data
    // make sure all sets of data have are correctly linked eg shooter date and causalty are all correct.

const fs = require("fs");

const file:string = "ShootingData.json";

fs.readFile(file, "utf8", (err, data)=>{
    if(err){
        console.error(err);
        return;

        // this consteant will be a regex experssion to search find and remove all \n \t and \'s
    }

    const contMod = data.replace(new RegExp(\n || \t, 'g'), "") ;
    let dFrm = data;
        fs.writeFile(file, contMod, "utf8", ()=>{
        if(err){
            console.error(err);

        }
        console.log("file has been edited");

    });

})
