const puppeteer = require("puppeteer");
const scrape = async url => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  let data = await page.evaluate(() => {
    const rowNodeList = document.querySelectorAll("tbody > tr");
    const rowArray = Array.from(rowNodeList);
    return rowArray.map(tr => {
      const dataNodeList = tr.querySelectorAll("td");
      const dataArray = Array.from(dataNodeList);
      const [
        id,
        state,
        confirmedNational,
        confirmedInternation,
        cured,
        death
      ] = dataArray.map(td => td.textContent);
      return {
        id,
        state,
        confirmedNational,
        confirmedInternation,
        cured,
        death
      };
    });
  });

  console.log(data);
  browser.close();
};

scrape("https://www.mohfw.gov.in/");
