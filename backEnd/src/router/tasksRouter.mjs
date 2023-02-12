import { create, options, findAll, deleteById, update } from "../controller/TasksController.mjs";

async function tasksRouter(req, res) {
  switch (req.method) {
    case 'POST':
      await create(req, res);
      break;
    case 'GET':
      await findAll(req, res);
      break;
    case 'PUT':
      await update(req, res);
      break;
    case 'DELETE':
      await deleteById(req, res);
      break;
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