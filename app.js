import 'colors';

import { menu, pause } from './helpers/inquirer.js';

console.clear();

const main = async () => {
  let option = '';

  do {
    option = await menu();
    if (option !== 0) await pause();
  } while (option !== 0);
};

main();
