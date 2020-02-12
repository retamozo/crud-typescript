import React, { useState, useContext } from "react";
import { Button } from "../../../reusable/Button/Button";
import ProjectContext from "../../../context/projects/projectContext";
const NewProjectForm = () => {
  interface IProjectsContext {
    showForm: boolean;
    showNewProjectFormFn: () => any;
  }

  const PROJECTS_CONTEXT: IProjectsContext = useContext(ProjectContext);

  const { showForm, showNewProjectFormFn } = PROJECTS_CONTEXT;

  const [newProject, setNewProject] = useState({
    projectName: ""
  });
  const handleNewProject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProject({
      ...newProject,
      [e.currentTarget.name]: e.target.value
    });
  };

  const { projectName } = newProject;

  const handleSubmitNewProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => showNewProjectFormFn()}
      >
        Create a project
      </button>
      {showForm && (
        <form onSubmit={handleSubmitNewProject}>
          <input
            value={projectName}
            type="text"
            placeholder="Project name"
            name="projectName"
            onChange={e => handleNewProject(e)}
          />
          <Button secondary> Add new project </Button>
        </form>
      )}
    </>
  );
};

export default NewProjectForm;
