import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import TaskContext from "../context/taskContext";
import { ThemeContext } from "../context/themeContext";

import "react-toastify/dist/ReactToastify.css";

const TaskAdder = () => {
  const [newTask, setNewTask] = useState("");

  const { addTask } = useContext(TaskContext);
  const { toggle } = useContext(ThemeContext);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask === "") {
      toast("there is no task to be added");
    } else addTask(newTask);
    return setNewTask("");
  };

  return (
    <div className="addBox">
      <ToastContainer />
      <input
        type="text"
        name="taskInput"
        placeholder="Enter your task"
        className={toggle ? "input darkInput" : "input"}
        value={newTask}
        onChange={(e) => handleInputChange(e)}
      />
      <button
        type="button"
        className={toggle ? "addBtn darkAddBtn" : "addBtn"}
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskAdder;
