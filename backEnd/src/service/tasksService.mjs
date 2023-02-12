import { modelCreate, modelFindAll, modelDeleteById, modelUpdate } from '../models/tasksModels.mjs';

export async function serviceCreate(body) {
  const reqBody = JSON.parse(body);
  const result = await modelCreate(reqBody);

  if (!result.id || !reqBody.task) {
    return { status: 400, message: 'Bad Request' };
  };
  
  return result;
};

export async function serviceFindAll() {
  const { status, allTasks } = await modelFindAll();

  if (!allTasks.length) return { status: 404, allTasks, message: 'Not Found'};
  
  return { status, allTasks };
};

export async function serviceUpdate(url, body) {
  const reqBody = JSON.parse(body);
  const targetId = url.split('/')[2];

  const result = await modelUpdate(targetId, reqBody);
  if (!result) {
    return { status: 400, message: 'Bad Request' };
  };

  return { status: 200, message: 'Task update' };
}

export async function serviceDeleteById(url) {
  const targetId = url.split('/')[2];
  try {
    const result = await modelDeleteById(targetId);
    if (!result) return { status: 404, message: 'Not Found' };
    return { status: 200, message: 'Task Deleted' };
  } catch (err) {
    if (err.code === 'ENOENT') {
      return { status: 400, message: 'Bad Request' };
    };
  };
};
