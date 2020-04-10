const puppeteer = require("puppeteer");
const World = require("../../models/world");

const scrapeWorldData = async (url) => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto(url);
  let dataWorld = await page.evaluate(() => {
    const table = document.querySelector("#thetable");
    const rowNodeList = table.querySelectorAll("tr");
    const rowArray = Array.from(rowNodeList);
    return rowArray.slice(1, 19).map((tr, index) => {
      if (index === 0) {
        const Country = "World";
        const Cases = tr.querySelector("th:nth-child(2)").textContent;
        const Deaths = tr.querySelector("th:nth-child(3)").textContent;
        const Recovered = tr.querySelector("th:nth-child(4)").textContent;
        return {
          Country,
          Cases,
          Deaths,
          Recovered,
        };
      }
      const dataNodeList1 = tr.querySelectorAll("th");
      const dataArray1 = Array.from(dataNodeList1);
      const Country = dataArray1[1].querySelector("a").textContent;
      const dataNodeList2 = tr.querySelectorAll("td");
      const dataArray2 = Array.from(dataNodeList2);
      const Cases = dataArray2[0].textContent;
      const Deaths = dataArray2[1].textContent;
      const Recovered = dataArray2[2].textContent;
      return { Country, Cases, Deaths, Recovered };
    });
  });
  console.log(dataWorld);

  //update database
  const updateDatabase = async (data) => {
    await World.deleteMany({});
    for (let i = 0; i < data.length; i++) {
      const country = new World({
        Country: data[i].Country,
        Cases: data[i].Cases,
        Deaths: data[i].Deaths,
        Recovered: data[i].Recovered,
      });
      await country.save();
    }
  };

  updateDatabase(dataWorld);
};

module.exports = scrapeWorldData;
