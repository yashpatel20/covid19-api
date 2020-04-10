const cron = require("node-cron");
const scrapeIndiaData = require("./scrapers/scrapeIndiaData");
const scrapeWorldData = require("./scrapers/scrapeWorldData");
const scrapeTsData = require("./scrapers/scrapeTimeSeries");

// cron.schedule("* * * * *", () => {
//   console.log("running cron");
//   scrapeIndiaData(
//     "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_India"
//   );
//   scrapeWorldData(
//     "https://en.m.wikipedia.org/wiki/Template:2019%E2%80%9320_coronavirus_pandemic_data"
//   );
//   scrapeTsData(
//     "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_India"
//   );
// });

// //Every 12 hours
cron.schedule("0 */12 * * *", () => {
  console.log("running cron");
  scrapeIndiaData(
    "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_India"
  );
  scrapeWorldData(
    "https://en.m.wikipedia.org/wiki/Template:2019%E2%80%9320_coronavirus_pandemic_data"
  );
  scrapeTsData(
    "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_India"
  );
});
