import React, { useReducer } from "react";
import projectReducer from "./projecteducer";
import projectContext from "./projectContext";
import { IinitialState, FORM_PROJECT, ADD_NEW_PROJECT, GET_PROJECTS_DATA, IS_ERROR_FORM, PROJECT_SELECTED } from "../types";
import uuid from 'uuid'

interface IprojectState {
  props?: any;
}
interface IProjectSelected {
  projectId: string;
}

interface IAddNewProject {
  project: Array<string>,
  id?: { [key: string]: Array<string> }
}

const projectsData2 = [
  { id: uuid.v4(), projectName: "hola " },
  { id: uuid.v4(), projectName: "23452345a " }
]

const ProjectState: React.FC<IprojectState> = props => {
  const initialState: IinitialState = {
    showForm: false,
    projectsData: [],
    errorForm: false,
    currentProject: null
  };
  //dispatch actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showNewProjectFormFn = () => {
    dispatch({
      type: FORM_PROJECT
    });
  };

  const getProjectsDataFn = () => {
    dispatch({
      type: GET_PROJECTS_DATA,
      payload: projectsData2
    })
  }

  const addNewProjectFn = (project: any, id?: any) => {
    project.id = uuid.v4()
    dispatch({
      type: ADD_NEW_PROJECT,
      payload: project
    })
  }

  const projectNameError = () => {
    dispatch({
      type: IS_ERROR_FORM
    })
  }

  const selectCurrentProjectFn = (projectId: any) => {
    dispatch({
      type: PROJECT_SELECTED,
      payload: projectId
    })
  }


  return (
    <projectContext.Provider
      value={{
        showForm: state.showForm,
        projectsData: state.projectsData,
        errorForm: state.errorForm,
        currentProject: state.currentProject,
        projectNameError,
        showNewProjectFormFn,
        getProjectsDataFn,
        addNewProjectFn,
        selectCurrentProjectFn
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
