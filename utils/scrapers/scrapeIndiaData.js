const puppeteer = require("puppeteer");
const India = require("../../models/india");

const scrapeIndiaData = async (url) => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector(".wikitable:nth-child(2)");
  let dataIndia = await page.evaluate(() => {
    const table = document.querySelector(
      ".wikitable.plainrowheaders.sortable.mw-collapsible"
    );
    const rowNodeList = table.querySelectorAll("tbody tr");
    const rowArray = Array.from(rowNodeList);
    return rowArray.map((tr, index) => {
      if (index === rowArray.length - 3) {
        const State = "India";
        const dataNodeList = tr.querySelectorAll("th");
        const dataArray = Array.from(dataNodeList);
        const Cases = dataArray[4].textContent;
        const Deaths = dataArray[2].textContent;
        const Recovered = dataArray[3].textContent;
        return {
          State,
          Cases,
          Deaths,
          Recovered,
        };
      } else if (index > rowArray.length - 3) {
        const text = tr.querySelector("small").textContent;
        return {
          State: text,
          Cases: "",
          Deaths: "",
          Recovered: "",
        };
      } else {
        const State = tr.querySelector("th:nth-child(2)").textContent;
        const dataNodeList = tr.querySelectorAll("td");
        const dataArray = Array.from(dataNodeList);
        const Cases = dataArray[3].textContent;
        const Deaths = dataArray[1].textContent;
        const Recovered = dataArray[2].textContent;
        return {
          State,
          Cases,
          Deaths,
          Recovered,
        };
      }
    });
  });
  console.log(dataIndia);

  //update database
  const updateDatabase = async (data) => {
    await India.deleteMany({});
    for (let i = 0; i < data.length; i++) {
      const india = new India({
        State: data[i].State,
        Cases: data[i].Cases,
        Deaths: data[i].Deaths,
        Recovered: data[i].Recovered,
      });
      await india.save();
    }
  };

  updateDatabase(dataIndia);
};

module.exports = scrapeIndiaData;
