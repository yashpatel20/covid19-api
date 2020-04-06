const puppeteer = require("puppeteer");
const India = require("../models/india");
const World = require("../models/world");

const scrape = async (url) => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto(url);

  let data1 = await page.evaluate(() => {
    let data = [];
    const counter = document.querySelector(".counter");
    data.push({
      State: "India",
      Cases: counter.querySelector(".red").textContent,
      Deaths: counter.querySelector(".black").textContent,
      Recovered: counter.querySelector(".green").textContent,
    });
    const table = document.querySelector(".homeleft:nth-of-type(1) .casetable");
    const rowNodeList = table.querySelectorAll("div");
    const rowArray = Array.from(rowNodeList);
    for (let i = 1; i < rowArray.length; i++) {
      const State = rowArray[i].querySelector(".country").textContent;
      const Cases = rowArray[i].querySelector(".cases").textContent;
      const Deaths = rowArray[i].querySelector(".deaths").textContent;
      const Recovered = rowArray[i].querySelector(".recovered").textContent;
      data.push({ State, Cases, Deaths, Recovered });
    }
    return data;
  });

  let data2 = await page.evaluate(() => {
    let data = [];
    const counter = document.querySelector(".counter1");
    data.push({
      Country: "World",
      Cases: counter.querySelector(".red").textContent,
      Deaths: counter.querySelector(".black").textContent,
      Recovered: counter.querySelector(".green").textContent,
    });
    const table = document.querySelector(".homeleft:nth-of-type(2) .casetable");
    const rowNodeList = table.querySelectorAll("div");
    const rowArray = Array.from(rowNodeList);
    for (let i = 1; i < rowArray.length; i++) {
      const Country = rowArray[i].querySelector(".country").textContent;
      const Cases = rowArray[i].querySelector(".cases").textContent;
      const Deaths = rowArray[i].querySelector(".deaths").textContent;
      const Recovered = rowArray[i].querySelector(".recovered").textContent;
      data.push({ Country, Cases, Deaths, Recovered });
    }
    return data;
  });

  console.log(data1);
  console.log(data2);
  browser.close();
  //Insert into db
  const updateDatabaseIndia = async (data) => {
    await India.deleteMany({});
    const promiseArr = [];
    for (let i = 0; i < data.length; i++) {
      const state = new India({
        State: data[i].State,
        Cases: data[i].Cases,
        Deaths: data[i].Deaths,
        Recovered: data[i].Recovered,
      });
      promiseArr.push(state.save());
    }
    await Promise.all(promiseArr);
  };
  const updateDatabaseWorld = async (data) => {
    await World.deleteMany({});
    const promiseArr = [];
    for (let i = 0; i < data.length; i++) {
      const country = new World({
        Country: data[i].Country,
        Cases: data[i].Cases,
        Deaths: data[i].Deaths,
        Recovered: data[i].Recovered,
      });
      promiseArr.push(country.save());
    }
    await Promise.all(promiseArr);
  };

  updateDatabaseIndia(data1);
  updateDatabaseWorld(data2);
};

module.exports = scrape;
