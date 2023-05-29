import fs from 'node:fs';

const saveInDataBase = data => {
  const file = './data/data.json';
  fs.writeFileSync(file, JSON.stringify(data));
};

export { saveInDataBase };
