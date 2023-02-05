import * as crypto from 'node:crypto';
import * as path from 'node:path';
import * as fs from 'node:fs';

const folderPath = path.resolve(process.cwd(), 'backEnd', 'db', 'migrations');

export async function createTask(body) {
  const id = crypto.randomUUID();
  fs.writeFileSync(path.join(folderPath, `${id}.json`), JSON.stringify({ id, ...body }));
  
  return {status: 201, id};
};