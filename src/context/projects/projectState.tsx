import React, { useReducer } from "react";
import projectReducer from "./projecteducer";
import projectContext from "./projectContext";
import { FORM_PROJECT, IinitialState } from "../types";

interface IprojectState {
  props?: any;
}

const ProjectState: React.FC<IprojectState> = props => {
  const initialState: IinitialState = {
    showForm: false,
    projectsData: [
      { name: "hola " },
      { name: "23452345a " },
      { name: "asdasda " }
    ]
  };
  //dispatch actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showNewProjectFormFn = () => {
    dispatch({
      type: FORM_PROJECT
    });
  };

  return (
    <projectContext.Provider
      value={{
        showForm: state.showForm,
        projectsData: state.projectsData,
        showNewProjectFormFn
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
