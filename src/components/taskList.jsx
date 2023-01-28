import { FaCheckCircle } from "react-icons/fa";
import { useContext } from "react";

import Task from "./task";
import TaskContext from "../context/taskContext";
import { ThemeContext } from "../context/themeContext";

const Tasklist = () => {
  const { tasks } = useContext(TaskContext);
  const { toggle } = useContext(ThemeContext);

  return (
    <div className="listContainer">
      <p className={toggle ? "darkTaskCounter" : {}}>
        <FaCheckCircle
          className={toggle ? " checkIcon darkCheckIcon " : "checkIcon"}
        />
        {tasks.length === 0
          ? "There are no tasks to do!"
          : `There is ${tasks.length} tasks to do`}
      </p>
      {tasks.map((task, index) => {
        return (
          <Task
            key={task.id}
            title={task.title}
            done={task.done}
            index={index}
            id={task.id}
          />
        );
      })}
    </div>
  );
};

export default Tasklist;
