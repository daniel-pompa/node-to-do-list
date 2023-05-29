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
}

export default Tasks;
