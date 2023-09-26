// scrape data with axiso and out put the data as a csv file. scraping https://en.wikipedia.org/wiki/List_of_mass_shootings_in_the_United_States. for mass shooting data.

// imports
import axios from "axios";
import cheerio from "cheerio";
import fs from 'fs';
//code

const fileName:string = "ShootingData.json";
const link:string = "https://en.wikipedia.org/wiki/List_of_mass_shootings_in_the_United_States";
async function Scraper() {
  try {
    const scrapingData = await axios.get(link);
    const html = scrapingData.data;
    const $ = cheerio.load(html);
    const textData = $('div').text();
    const jsonData = JSON.stringify(textData, null , 0);
    const jsonParse = JSON.parse(jsonData);
    fs.writeFileSync(fileName, jsonParse, "utf8");
  }catch (error){
    console.error(error);
  }
}
Scraper();
