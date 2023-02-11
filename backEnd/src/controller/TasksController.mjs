import { serviceCreate, serviceFindAll, serviceDeleteById } from "../service/tasksService.mjs";

export async function create(req, res) {    
  let buffer = '';
  return new Promise((resolve, reject) => {
    req.on('data', (chunk) => {
        buffer += chunk;
      });
    req.on('end', async (chunk) => {
      if (chunk) {
        buffer += chunk;
      }
      const result = await serviceCreate(buffer);

      if (result.status === 201) {
        res.statusCode = result.status;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
        res.write(JSON.stringify(buffer));
        res.end();
        resolve();
      }        

      res.statusCode = result.status;
      reject(result.message);
    });
  });
};

export async function findAll(_req, res) {
  return new Promise(async (resolve, reject) => {
    const result = await serviceFindAll();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');

    if (result.status === 302) {
      res.statusCode = result.status;
      res.write(JSON.stringify(result.allTasks));
      res.end();
      resolve();
    };

    res.statusCode = result.status;
    reject(result.message);
  });
}

export async function deleteById(req, res) {
  return new Promise(async (resolve, reject) => {
    const result = await serviceDeleteById(req.url);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');

    if (result.status === 200) {
      res.statusCode = result.status;
      res.write(JSON.stringify(result.message));
      res.end();
      resolve();
    };

    res.statusCode = result.status;
    reject(result.message);
  });
};

export async function options(_req, res) {
  res.statusCode = 204;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', 86400);
  res.end();
};
