import 'colors';
import inquirer from 'inquirer';

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'Seleccione una opción:',
    choices: [
      {
        value: '1',
        name: '1. Crear tarea',
      },
      {
        value: '2',
        name: '2. Listar tareas',
      },
      {
        value: '3',
        name: '3. Listar tareas completadas',
      },
      {
        value: '4',
        name: '4. Listar tareas pendientes',
      },
      {
        value: '5',
        name: '5. Completar tarea(s)',
      },
      {
        value: '6',
        name: '6. Eliminar tarea',
      },
      {
        value: '0',
        name: '0. Salir',
      },
    ],
  },
];

const menu = async () => {
  console.clear();

  const { option } = await inquirer.prompt(questions);

  return option;
};

const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar`,
    },
  ];

  await inquirer.prompt(question);

  return question;
};

const input = async message => {
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Debe introducir la descripción de la tarea';
        }
        return true;
      },
    },
  ];

  const { description } = await inquirer.prompt(question);
  return description;
};

const deleteTasks = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const index = `${i + 1}`.green;

    return {
      value: task.id,
      name: `${index} ${task.description}`,
    };
  });

  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancelar',
  });

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Eliminar',
      choices,
    },
  ];

  const { id } = await inquirer.prompt(questions);

  return id;
};

const confirm = async message => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);

  return ok;
};

export { menu, pause, input, deleteTasks, confirm };
