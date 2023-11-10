import TaskService from './TaskService';

const TaskServicePlugin = {
  install(Vue, options) {
    const taskService = new TaskService();
    Vue.prototype.$taskService = taskService;
  },
};

export default TaskServicePlugin;