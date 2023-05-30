import Task from './task.js';
import 'colors';

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
      const index = `${i + 1}`.green;
      const { description, completed } = task;
      const status = completed ? 'Completada'.green : 'Pendiente'.red;
      console.log(`${index}. ${description} :: ${status}`);
    });
  }
}

export default Tasks;
