import * as http from 'node:http';
import tasksRouter from './src/router/tasksRouter.mjs';

export const port = 3336;
const server = http.createServer();

server.on('request', async (req, res) => {
  await tasksRouter(req, res);
  res.end();
});

server.listen(port, () => {
  console.log(`Server up on port: ${port}.`);
});

export default server;
