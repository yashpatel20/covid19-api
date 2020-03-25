const app = require("./app");
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");
const wakeUpDyno = require("./utils/wakeUpDyno");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
  wakeUpDyno("https://young-fjord-26148.herokuapp.com/", 7100000);
});
