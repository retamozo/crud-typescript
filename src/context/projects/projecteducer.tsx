import { FormNewProjectTypes, FORM_PROJECT, ADD_NEW_PROJECT, GET_PROJECTS_DATA, IS_ERROR_FORM, PROJECT_SELECTED, } from "../types";

export default (state: any, action: FormNewProjectTypes) => {
  switch (action.type) {
    default:
      return state;
    case FORM_PROJECT:
      return {
        ...state,
        showForm: true
      };
    case GET_PROJECTS_DATA:
      return {
        ...state,
        projectsData: action.payload
      }
    case ADD_NEW_PROJECT:
      return {
        ...state,
        projectsData: [...state.projectsData, action.payload],
        showForm: false,
        errorForm: false
      }
    case IS_ERROR_FORM:
      return {
        ...state,
        errorForm: true
      }
    case PROJECT_SELECTED: {
      return {
        ...state,
        currentProject: state.projectsData.filter((current: { id: string | undefined; }) => current.id === action.payload)
      }
    }
  }
};
