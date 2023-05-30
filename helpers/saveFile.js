import fs from 'node:fs';

const file = './data/data.json';

const saveInDataBase = data => {
  fs.writeFileSync(file, JSON.stringify(data));
};

const readDataBaseFile = () => {
  if (!fs.existsSync(file)) {
    return null;
  }

  const info = fs.readFileSync(file, { encoding: 'utf-8' });
  const data = JSON.parse(info);

  return data;
};

export { saveInDataBase, readDataBaseFile };
