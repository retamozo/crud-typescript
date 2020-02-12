import React from "react";
import { Button } from "../../reusable/Button/Button";

const TaskForm = () => {
  return (
    <main className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="add a new taskt"
            name="nameTask"
          />
        </div>
        <div className="contenedor-input">
          <Button secondary type="submit">
            Add new task
          </Button>
        </div>
      </form>
    </main>
  );
};

export default TaskForm;
