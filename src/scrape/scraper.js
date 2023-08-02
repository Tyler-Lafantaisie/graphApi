// scrape data with axiso and out put the data as a csv file. scraping https://en.wikipedia.org/wiki/List_of_mass_shootings_in_the_United_States. for mass shooting data.
// imports
const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");
//code
const fileName = "ShootingData.json";
const link = "https://en.wikipedia.org/wiki/List_of_mass_shootings_in_the_United_States";
async function Scraper() {
    try {
        const scrapingData = await axios.get(link);
        const html = scrapingData.data;
        const $ = cheerio.load(html);
        const textData = $('div').text();
        const jsonData = JSON.stringify(textData, null, 2);
        fs.writeFileSync(fileName, jsonData);
    }
    catch (error) {
        console.error(error);
    }
}
// Read both axio docs and cheerio docs to find a way to set data up. put data in json file with fs.WriteFileSync
// function Output(input:string) {
//     try {
//        fs.writeFile(fileName,jsonData, (err) =>{
//            if(err) throw err;
//            console.log("The file as been saved");
//        });
//         console.log("file has been created");
//
//     } catch (error) {
//         throw(error);
//     }
// }
Scraper();
