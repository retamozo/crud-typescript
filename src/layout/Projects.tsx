import React, { useContext } from "react";
import Sidebar from "../reusable/Sidebar/Aside";
import NewProject from "../components/Projects/NewProject/NewProject";
import List from "../components/Projects/List";
import Header from "../components/Header/Header";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskForm/TaskList";
import ProjectContext from "../context/projects/projectContext";

interface IprojectData {
  projectsData: Array<object>;
}

const Projects: React.FC<any> = () => {
  const LIST_OF_PROJECTS: IprojectData = useContext(ProjectContext);

  const { projectsData } = LIST_OF_PROJECTS;

  return (
    <div className="contenedor-app">
      <Sidebar title={"Manage your projects"}>
        <NewProject />
        <List projects={projectsData} />
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
