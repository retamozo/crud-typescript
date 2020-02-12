import { FormNewProjectTypes, FORM_PROJECT } from "../types";

export default (state: any, action: FormNewProjectTypes) => {
  switch (action.type) {
    default:
      return state;
    case FORM_PROJECT:
      return {
        ...state,
        showForm: true
      };
  }
};
