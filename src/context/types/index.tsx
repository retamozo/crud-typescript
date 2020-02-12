interface FormProjectAction {
  type: typeof FORM_PROJECT;
  payload?: any;
}
export interface IinitialState {
  showForm: boolean;
  projectsData: object[];
}

export const FORM_PROJECT = "FORM_PROJECT";

export type FormNewProjectTypes = FormProjectAction;
