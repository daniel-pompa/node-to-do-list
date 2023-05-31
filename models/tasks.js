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
        console.log(`${(index + '.').green} ${description} :: ${status}`);
      } else {
        console.log(`${(index + '.').red} ${description} :: ${status}`);
      }
    });
  }

  listPendingCompleted(tasksCompleted = true) {
    let counter = 0;
    this.arrayList.forEach(task => {
      const { description, completed } = task;
      const status = completed ? 'Completada'.green : 'Pendiente'.red;

      if (tasksCompleted) {
        if (completed) {
          counter += 1;
          console.log(`${(counter + '.').green} ${description} :: ${completed.green}`);
        }
      } else {
        if (!completed) {
          counter += 1;
          console.log(`${(counter + '.').red} ${description} :: ${status}`);
        }
      }
    });
  }

  deleteTask(id = '') {
    if (this.taskList[id]) {
      delete this.taskList[id];
    }
  }

  toggleCompleted(ids = []) {
    ids.forEach(id => {
      const task = this.taskList[id];
      if (!task.completed) {
        task.completed = new Date().toLocaleDateString();
      }
    });

    this.arrayList.forEach(task => {
      if (!ids.includes(task.id)) {
        this.taskList[task.id].completed = null;
      }
    });
  }
}

export default Tasks;
