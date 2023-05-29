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

export { menu, pause, input };
