import * as http from 'node:http';
import router from './src/router/tasksRouter.mjs';
// const url = require('url'); // string to object;
// const util = require('util'); // object to string;
// const { StringDecoder } = require('string_decoder');

const port = 3335;
const server = http.createServer();

server.on('request', (req, res) => {
  router(req, res);
});

server.listen(port, () => {
  console.log(`Server up on port: ${port}.`);
});

export default server;
