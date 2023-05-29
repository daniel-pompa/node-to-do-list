import Task from './task.js';

class Tasks {
  constructor() {
    this.taskList = {};
  }

  createTask(description) {
    const task = new Task(description);
    this.taskList[task.id] = task;
  }
}

export default Tasks;
