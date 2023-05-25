import 'colors';
import inquirer from 'inquirer';

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'Seleccione una opción:',
    choices: [
      {
        value: 1,
        name: '1. Crear tarea',
      },
      {
        value: 2,
        name: '2. Listar tareas',
      },
      {
        value: 3,
        name: '3. Listar tareas completadas',
      },
      {
        value: 4,
        name: '4. Listar tareas pendientes',
      },
      {
        value: 5,
        name: '5. Completar tarea(s)',
      },
      {
        value: 6,
        name: '6. Eliminar tarea',
      },
      {
        value: 0,
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

export { menu, pause };
