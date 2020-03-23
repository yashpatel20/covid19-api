const cron = require("node-cron");
const scrape = require("./scraper");

// cron.schedule("* * * * *", () => {
//   console.log("running cron");
//   scrape("https://www.mohfw.gov.in/");
// });
cron.schedule("*/30 * * * *", () => {
  console.log("running cron");
  scrape("https://www.mohfw.gov.in/");
});
