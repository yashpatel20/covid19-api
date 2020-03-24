const puppeteer = require("puppeteer");
const State = require("../models/state");

const scrape = async url => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto(url);

  let data = await page.evaluate(() => {
    const table = document.querySelector("#cases");
    const rowNodeList = table.querySelectorAll("tbody > tr");
    const rowArray = Array.from(rowNodeList);
    return rowArray.map(tr => {
      const dataNodeList = tr.querySelectorAll("td");
      const dataArray = Array.from(dataNodeList);
      const [
        id,
        state,
        confirmedNational,
        confirmedInternational,
        cured,
        death
      ] = dataArray.map(td => td.textContent);
      return {
        id,
        state,
        confirmedNational,
        confirmedInternational,
        cured,
        death
      };
    });
  });
  console.log(data);
  browser.close();
  //Insert into db
  const updateDatabase = async data => {
    await State.deleteMany({});
    const promiseArr = [];
    let i = 0;
    for (; i < data.length - 1; i++) {
      const state = new State({
        State: data[i].state,
        "Total Confirmed cases (Indian National)": data[i].confirmedNational,
        "Total Confirmed cases (Foreign National)":
          data[i].confirmedInternational,
        "Cured/Discharged/Migrated": data[i].cured,
        Death: data[i].death
      });
      promiseArr.push(state.save());
    }
    const state = new State({
      State: data[i].id,
      "Total Confirmed cases (Indian National)": data[i].state,
      "Total Confirmed cases (Foreign National)": data[i].confirmedNational,
      "Cured/Discharged/Migrated": data[i].confirmedInternational,
      Death: data[i].cured
    });
    promiseArr.push(state.save());
    await Promise.all(promiseArr);
  };

  updateDatabase(data);
};

module.exports = scrape;
