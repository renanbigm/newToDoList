import * as crypto from 'node:crypto';
import * as path from 'node:path';
import * as fs from 'node:fs';

const folderPath = path.resolve(process.cwd(), 'db', 'data');
let position = 0

export async function modelCreate(body) {
  const id = crypto.randomUUID();
  fs.writeFileSync(path.join(folderPath, `${id}.json`), JSON.stringify({ position, id, ...body }));
  
  position += 1;
  return { status: 201, position, id };
};

export async function modelFindAll() {
  const getFiles = fs.readdirSync(folderPath);

  const allTasks = getFiles.map((task) => {
    const file = path.join(folderPath, task);
    const readFile = fs.readFileSync(file, 'utf8');
  
    return {
      index: JSON.parse(readFile).position,
      task: JSON.parse(readFile).task,
      id: JSON.parse(readFile).id,
      class: JSON.parse(readFile).class,
    };
  });

  return { status: 302, allTasks };
};

export async function modelUpdate(id, body) {
  const getFiles = fs.readdirSync(folderPath);
  let isOk = false;
  
  getFiles.forEach((task) => {
    const file = path.join(folderPath, task);
    const readFile = fs.readFileSync(file, 'utf8');
    
    if (readFile.includes(id)) {
      const target = JSON.parse(readFile);
      fs.writeFileSync(path.join(folderPath, `${id}.json`), JSON.stringify({ ...target, class: body }));
      isOk = true
    }
  });

  return isOk;
}

export async function modelDeleteById(id) {
  const getFiles = fs.readdirSync(folderPath);
  const findTarget = getFiles.find((task) => {
    const file = path.join(folderPath, task);
    const readFile = fs.readFileSync(file, 'utf8');

    return JSON.parse(readFile).id === id;
  });
  fs.unlinkSync(path.join(folderPath, `${id}.json`));
  
  return findTarget;
}
