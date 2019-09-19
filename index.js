const express = require('express');
const server = express();
const router = require('./router');

server.use(router);
const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT} ...`);
});

module.exports = server;