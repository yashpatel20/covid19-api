const puppeteer = require("puppeteer");
const IndiaTS = require("../../models/indiaTS");

const scrapeTsData = async (url) => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto(url);
  let dataIndiaTS = await page.evaluate(() => {
    const rowNodeList = document.querySelectorAll(".barbox tr");
    const rowArray = Array.from(rowNodeList);
    const rowArrayFinal = rowArray.slice(2, rowArray.length - 1);
    return rowArrayFinal.map((tr) => {
      const dataNodeList = tr.querySelectorAll("td");
      const dataArray = Array.from(dataNodeList);
      const Date = dataArray[0].textContent;
      const spanElem = dataArray[2].querySelector(".nowrap");
      const Cases = spanElem.querySelector("span:nth-child(1)").textContent;
      return {
        Date,
        Cases,
      };
    });
  });
  console.log(dataIndiaTS);

  //update database
  const updateDatabase = async (data) => {
    await IndiaTS.deleteMany({});
    for (let i = 0; i < data.length; i++) {
      const indiaTS = new IndiaTS({
        Date: data[i].Date,
        Cases: data[i].Cases,
      });
      await indiaTS.save();
    }
  };

  updateDatabase(dataIndiaTS);
};

module.exports = scrapeTsData;
