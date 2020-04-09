const cron = require("node-cron");
const scrapeData = require("./scrapeData");
const scrapeTsData = require("../utils/scrapeTimeSeries");

// cron.schedule("* * * * *", () => {
//   console.log("running cron");
//   scrapeData("http://www.covid19india.com/");
//   scrapeTsData(
//     "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_India"
//   );
// });

Every 12 hours
cron.schedule("0 */12 * * *", () => {
  console.log("running cron");
  scrapeData("http://www.covid19india.com/");
  scrapeTsData(
    "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_India"
  );
});
