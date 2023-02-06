import { modelCreate, modelFindAll } from '../models/tasksModels.mjs';

export async function serviceCreate(body) {
  const req = JSON.parse(body);
  const { status, id } = await modelCreate(req);
  if (id && req.task) {
    return { status, id };
  };
  return { status: 400, message: 'Bad Request' };
};

export async function serviceFindAll() {
  const { status, allTasks } = await modelFindAll();
  if (allTasks.length) return { status, allTasks };

  return { status: 204, message: 'No content'};
};
