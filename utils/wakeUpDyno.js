const http = require("http");

const wakeUpDyno = (url, interval) => {
  setTimeout(() => {
    try {
      http.get(url, () => {
        console.log(`Making HTTP request to ${url}...`);
      });
    } catch (err) {
      console.log(`Error fetching ${url}`);
    } finally {
      wakeUpDyno(url, interval);
    }
  }, interval);
};

module.exports = wakeUpDyno;
