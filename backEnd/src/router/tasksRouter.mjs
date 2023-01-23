import { create, findAll, options } from "../controller/TasksController.mjs";

const tasksRouter = (req, res) => {
  console.log('URL ->', req.url);
  console.log('METHOD ->', req.method);
  console.log('BODY ->', req.body);
  console.log('HEADERS ->', req.headers);

  switch (req.method) {
    case 'POST':
      create(req, res);
      break;
    case 'GET':
      findAll(req, res);
      break;
    case 'PUT':
      console.log('put');
      break;
    case 'DELETE':
      console.log('delete');
      break;
    case 'OPTIONS':
      options(req, res);
      break;
    default:
      break;
  }

  res.statusCode = 200;
  res.end();
}

export default tasksRouter;