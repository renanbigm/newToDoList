import create from "../controller/TasksController.mjs";

const tasksRouter = (req, res) => {
  console.log(req.url, req.method, req.headers, req.body);

  switch (req.method) {
    case 'POST':
      create(req, res);
      break;
    case 'GET':
      console.log('get');
      break;
    case 'PUT':
      console.log('put');
      break;
    case 'DELETE':
      console.log('delete');
      break;
    default:
      break;
  }

  res.statusCode = 200;
  res.end();
}

export default tasksRouter;