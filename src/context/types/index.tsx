interface FormProjectAction {
  type: typeof FORM_PROJECT;
  payload?: any;
}
interface GetProjectsAction {
  type: typeof GET_PROJECTS_DATA,
  payload: Array<object>
}
export interface AddNewPorjectAction {
  type: typeof ADD_NEW_PROJECT
  payload: Array<object>
}

export interface IsErrorFormAction {
  type: typeof IS_ERROR_FORM
  payload?: boolean
}

export interface SelectProjectAction {
  type: typeof PROJECT_SELECTED
  payload?: boolean
}

export interface IinitialState {
  showForm: boolean;
  projectsData: object[];
  errorForm: boolean
  currentProject: null | undefined
}

export const FORM_PROJECT = "FORM_PROJECT";
export const ADD_NEW_PROJECT = "ADD_NEW_PROJECT"
export const GET_PROJECTS_DATA = "GET_PROJECTS_DATA"
export const IS_ERROR_FORM = "IS_ERROR_FORM"
export const PROJECT_SELECTED = "PROJECT_SELECTED"

export type FormNewProjectTypes = FormProjectAction | GetProjectsAction | AddNewPorjectAction | IsErrorFormAction | SelectProjectAction;
