const cron = require("node-cron");
const scrape = require("../scraper");

cron.schedule("*/30 * * * *", () => {
  console.log("running cron");
  scrape("https://www.mohfw.gov.in/");
});
