import 'colors';
import Task from './task.js';

class Tasks {
  constructor() {
    this.taskList = {};
  }

  // Transform object into an array
  get arrayList() {
    const list = [];

    Object.keys(this.taskList).forEach(key => {
      const task = this.taskList[key];
      list.push(task);
    });

    return list;
  }

  createTask(description) {
    const task = new Task(description);
    this.taskList[task.id] = task;
  }

  loadTasksFromArray(tasks = []) {
    tasks.forEach(task => {
      this.taskList[task.id] = task;
    });
  }

  list() {
    this.arrayList.forEach((task, i) => {
      const index = `${i + 1}`;
      const { description, completed } = task;
      const status = completed ? 'Completada'.green : 'Pendiente'.red;

      if (completed) {
        console.log(`${index} ${description} :: ${status}`.green);
      } else {
        console.log(`${index} ${description} :: ${status}`.red);
      }
    });
  }

  listPendingCompleted(tasksCompleted = true) {
    let index = 0;
    this.arrayList.forEach(task => {
      const { description, completed } = task;
      const status = completed ? 'Completada'.green : 'Pendiente'.red;

      if (tasksCompleted) {
        if (completed) {
          index += 1;
          console.log(`${index.toString()} ${description} :: ${status}`.green);
        }
      } else {
        if (!completed) {
          index += 1;
          console.log(`${index.toString()} ${description} :: ${status}`.red);
        }
      }
    });
  }
}

export default Tasks;
