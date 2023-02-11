import { modelCreate, modelFindAll, modelDeleteById } from '../models/tasksModels.mjs';

export async function serviceCreate(body) {
  const req = JSON.parse(body);
  const { status, id } = await modelCreate(req);

  if (!id || !req.task) {
    return { status: 400, message: 'Bad Request' };
  };
  
  return { status, id };
};

export async function serviceFindAll() {
  const { status, allTasks } = await modelFindAll();
  
  if (!allTasks.length) return { status: 204, message: 'No content'};
  
  return { status, allTasks };
};

export async function serviceDeleteById(url) {
  const targetId = url.split('/')[2];
  const result = await modelDeleteById(targetId);

  if (!result) return { status: 404, message: 'Not Found' };

  return { status: 200, message: 'Task Deleted' };
}
