import * as http from 'node:http';
import tasksRouter from './src/router/tasksRouter.mjs';
// const url = require('url'); // string to object;
// const util = require('util'); // object to string;
// const { StringDecoder } = require('string_decoder');

const port = 3335;
const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req.url)
  if (req.url.includes('/tasks')) {
    tasksRouter(req, res);
  }

  res.status = 404;
  res.end("Route not Found");
});

server.listen(port, () => {
  console.log(`Server up on port: ${port}.`);
});

export default server;
