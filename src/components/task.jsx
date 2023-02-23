import { FaTrashAlt } from "react-icons/fa";

import { useContext } from "react";

import TaskContext from "../context/taskContext";
import { ThemeContext } from "../context/themeContext";

const Task = ({ title, done, index, id }) => {
  const { changeTaskStatus, deleteTask } = useContext(TaskContext);
  const { toggle } = useContext(ThemeContext);

  return (
    <div className={toggle ? "list darkList" : "list"}>
      <input
        className={toggle ? "checkbox darkCheckbox" : "checkbox"}
        type="checkbox"
        checked={done}
        onChange={() => changeTaskStatus(id)}
      />

      <span style={{ margin: 30 }} className={done ? "checkedTask" : ""}>
        {title}
      </span>
      <button
        className={toggle ? "deleteBtn darkDeleteBtn" : "deleteBtn"}
        type="submit"
        onClick={() => deleteTask(id)}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Task;
