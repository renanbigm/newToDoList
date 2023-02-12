import * as http from 'node:http';
import tasksRouter from './src/router/tasksRouter.mjs';

export const frontPort = 'http://localhost:5500';
export const backPort = 3336;
const server = http.createServer();

server.on('request', async (req, res) => {
  if (req.url.includes('/tasks')) {
    await tasksRouter(req, res);
  }
  res.end();
});

server.listen(backPort, () => {
  console.log(`Server up on port: ${backPort}.`);
});

export default server;
