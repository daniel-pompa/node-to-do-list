import 'colors';

import { menu, pause, input } from './helpers/inquirer.js';
import { readDataBaseFile, saveInDataBase } from './helpers/saveFile.js';
import Tasks from './models/tasks.js';

const main = async () => {
  let option = '';
  const tasks = new Tasks();

  const databaseTasks = readDataBaseFile();

  if (databaseTasks) {
    tasks.loadTasksFromArray(databaseTasks);
  }

  do {
    option = await menu();

    switch (option) {
      case '1':
        const description = await input('Descripción:');
        tasks.createTask(description);
        break;

      case '2':
        tasks.list();
        break;
      case '3':
        tasks.listPendingCompleted(true);
        break;
      case '4':
        tasks.listPendingCompleted(false);
        break;
    }

    // Save tasks in a JSON file
    saveInDataBase(tasks.arrayList);

    if (option !== '0') await pause();
  } while (option !== '0');
};

main();
