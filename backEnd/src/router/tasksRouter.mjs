import { create, options, findAll } from "../controller/TasksController.mjs";

async function tasksRouter(req, res) {
  switch (req.method) {
    case 'POST':
      await create(req, res);
      break;
    case 'GET':
      await findAll(req, res);
      break;
    // case 'PUT':
    //   console.log('put');
    //   break;
    // case 'DELETE':
    //   console.log('delete');
    //   break;
    case 'OPTIONS':
      options(req, res);
      break;
    default:
      break;
  };
  res.statusCode = 200;
  res.end();
};

export default tasksRouter;