const cron = require("node-cron");
const scrape = require("./scraper");

// cron.schedule("* * * * *", () => {
//   console.log("running cron");
//   scrape("http://www.covid19india.com/");
// });

//Every 12 hours
cron.schedule("0 */12 * * *", () => {
  console.log("running cron");
  scrape("http://www.covid19india.com/");
});
