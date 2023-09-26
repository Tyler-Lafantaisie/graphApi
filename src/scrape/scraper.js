"use strict";
// scrape data with axiso and out put the data as a csv file. scraping https://en.wikipedia.org/wiki/List_of_mass_shootings_in_the_United_States. for mass shooting data.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const fs_1 = __importDefault(require("fs"));
//code
const fileName = "ShootingData.json";
const link = "https://en.wikipedia.org/wiki/List_of_mass_shootings_in_the_United_States";
async function Scraper() {
    try {
        const scrapingData = await axios_1.default.get(link);
        const html = scrapingData.data;
        const $ = cheerio_1.default.load(html);
        const textData = $('div').text();
        const jsonData = JSON.stringify(textData, null, 0);
        const jsonParse = JSON.parse(jsonData);
        fs_1.default.writeFileSync(fileName, jsonParse, "utf8");
    }
    catch (error) {
        console.error(error);
    }
}
Scraper();
