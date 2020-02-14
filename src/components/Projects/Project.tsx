import React, { useContext } from "react";
import ProjectContext from '../../context/projects/projectContext'

const Project = ({ projectData }: any) => {

  interface ICurrenrtPoject {
    currentProject: object[]
    selectCurrentProjectFn: ICurrentAction
  }
  interface ICurrentAction {
    (id: string): string
  }
  const projectSelected: ICurrenrtPoject = useContext(ProjectContext)
  const { selectCurrentProjectFn } = projectSelected
  const { projectName, id } = projectData;




  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={() => selectCurrentProjectFn(id)} > {projectName} </button >
    </li>
  );
};
export default Project;
