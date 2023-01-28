import React, { useState } from "react";

import Header from "./components/header";
import TaskAdder from "./components/taskAdder";
import Tasklist from "./components/taskList";

import TaskContext from "./context/taskContext";
import { ThemeContext } from "./context/themeContext";

import "./app.css";

function App() {
  const initialTasksArray = [
    { id: 1, title: "create a todoList", done: false },
    { id: 2, title: "work on css and style", done: false },
    { id: 3, title: "make it responsive", done: false },
    { id: 4, title: "add it to my gitHub repositories", done: false },
    { id: 5, title: "go ahead for the next task", done: false },
  ];
  const [tasks, setTasks] = useState(initialTasksArray);
  const [changed, setChanged] = useState(false);
  const { toggle } = React.useContext(ThemeContext);

  const handleAdd = (title) => {
    const task = { id: Date.now(), title: title, done: false };
    const tempTasks = tasks;
    // tempTasks.push(task);
    // setTasks(tempTasks);

    // setTasks((tasks) => tasks.push(task));     prevState,current
    setTasks(tempTasks.concat(task));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleChangeStatus = (id) => {
    const tempTasks = tasks;
    tempTasks.forEach((task) => {
      if (task.id === id) task.done = !task.done;
    });
    setChanged(!changed);
    setTasks(tempTasks);
  };
  return (
    <div
      className={`container ${toggle ? "dark" : "light"} ${
        toggle ? "darkContainer" : "container"
      }`}
    >
      <Header />
      <main className="main">
        <TaskContext.Provider
          value={{
            tasks: tasks,
            addTask: handleAdd,
            deleteTask: handleDelete,
            changeTaskStatus: handleChangeStatus,
            changed: changed,
          }}
        >
          <Tasklist />
          <TaskAdder />
        </TaskContext.Provider>
      </main>
    </div>
  );
}

export default App;
