require('dotenv').config()
const server = require("./api/server.js");

// heroku will add PORT variable to the environment
const port = process.env.PORT || 8888;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
