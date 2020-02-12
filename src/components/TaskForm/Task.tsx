import React from "react";

const Task = ({ tasksData }: any) => {
  return (
    <li className="tarea sombra">
      <p>{tasksData.taskName} </p>
      <div className="estado">
        {tasksData.finished === true ? (
          <button type="button" className="completo">
            Completed
          </button>
        ) : (
          <button type="button" className="incompeto">
            Incompleted
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>
        <button type="button" className="btn btn-secundario">
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
