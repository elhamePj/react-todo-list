import React from "react";

const TaskContext = React.createContext({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  changeTaskStatus: () => {},
  changed: false,
});

export default TaskContext;
