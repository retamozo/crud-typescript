import React from "react";

import Task from "./Task";
const TaskList = () => {
  const todo = [
    { taskName: "tarea => ", finished: true },
    { taskName: "tarea => ", finished: false },
    { taskName: "tarea => ", finished: true },
    { taskName: "tarea => ", finished: false },
    { taskName: "tarea => ", finished: true }
  ];
  return (
    <>
      <h2>Currrent: BlockFi</h2>
      <ul className="listado-tareas">
        {todo.length > 0 ? (
          todo.map((task, i) => {
            return (
              <li className="tarea">
                <Task tasksData={task} key={i} />
              </li>
            );
          })
        ) : (
          <li>No there are tasks </li>
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Delete project &times;
      </button>
    </>
  );
};
export default TaskList;
