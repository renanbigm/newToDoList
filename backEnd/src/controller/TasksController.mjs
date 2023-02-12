import { serviceCreate, serviceFindAll, serviceDeleteById, serviceUpdate } from "../service/tasksService.mjs";
import { frontPort } from "../../server.mjs";

export async function create(req, res) {    
  let buffer = '';
  return new Promise((resolve, _reject) => {
    req.on('data', (chunk) => {
        buffer += chunk;
      });
    req.on('end', async (chunk) => {
      if (chunk) {
        buffer += chunk;
      }
      const { status, position, id, message } = await serviceCreate(buffer);

      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', `${frontPort}`);
      res.statusCode = status;
  
      const response = { 
        status: status,
        body: { position, id },
        ok: status >= 200 && status < 300,
        ...(message && { message })
      };

      res.write(JSON.stringify(response));
      res.end();
      resolve(); 
    });
  });
};

export async function findAll(_req, res) {
  const { status, allTasks, message} = await serviceFindAll();
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', `${frontPort}`);
  res.statusCode = status;

  const response = { 
    status: status,
    body: allTasks,
    ok: status >= 200 && status < 303,
    ...(message && { message })
  };

  res.write(JSON.stringify(response));
  res.end();
}

export async function update(req, res) {    
  let buffer = '';
  return new Promise((resolve, _reject) => {
    req.on('data', (chunk) => {
        buffer += chunk;
      });
    req.on('end', async (chunk) => {
      if (chunk) {
        buffer += chunk;
      }
      const { status, message } = await serviceUpdate(req.url, buffer);
      res.statusCode = status;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', `${frontPort}`);
      
      const response = {
        status: status,
        ok: status >= 200 && status < 303,
        ...(message && { message })
      };
      
      res.write(JSON.stringify(response));
      res.end();
      resolve();
    });
  });
};

export async function deleteById(req, res) {
  const { status, message } = await serviceDeleteById(req.url);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', `${frontPort}`);

  res.statusCode = status;
  const body = { 
    status: status,
    ok: status >= 200 && status < 300,
    ...(message && { message })
  };
  res.write(JSON.stringify(body));
  res.end();
};

export async function options(_req, res) {
  res.statusCode = 204;
  res.setHeader('Access-Control-Allow-Origin', `${frontPort}`);
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', 86400);
  res.end();
};
