import * as crypto from 'node:crypto';
import * as path from 'node:path';
import * as fs from 'node:fs';

const folderPath = path.resolve(process.cwd(), 'db', 'migrations');

export async function modelCreate(body) {
  const id = crypto.randomUUID();
  fs.writeFileSync(path.join(folderPath, `${id}.json`), JSON.stringify({ id, ...body }));
  
  return { status: 201, id };
};

export async function modelFindAll() {
  const getFiles = fs.readdirSync(folderPath);
  
  const allTasks = getFiles.map((task, index) => {
    const file = path.join(folderPath, task);
    const readFile = fs.readFileSync(file, 'utf8');

    return {
      index,
      task: JSON.parse(readFile).task,
      id: JSON.parse(readFile).id
    };
  });
  return { status: 200, allTasks };
};
