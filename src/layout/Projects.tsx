import React from "react";
import Sidebar from '../reusable/Sidebar'
import NewProject from "../components/Projects/NewProject/NewProject";
import List from "../components/Projects/List";
import Header from "../components/Header/Header";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskForm/TaskList";
 


const Projects: React.FC<any> = () => {


  return (
    <div className="contenedor-app">
      <Sidebar title={"Manage your projects"}>
        <NewProject />
        <List />
      </Sidebar>
      <div className="seccion-principal">
        <Header />
        <main>
          <TaskForm />
          <div className="contenedor-tareas">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
};
export default Projects;
