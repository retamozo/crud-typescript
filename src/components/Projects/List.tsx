import React, { useEffect, useContext } from "react";
import Project from "./Project";
import ProjectContext from "../../context/projects/projectContext";

const List = () => {
  interface IprojectData {
    projectsData: Array<object>
    getProjectsDataFn: () => Array<object>
  }

  const projectsDataFromContext: IprojectData = useContext(ProjectContext);

  const { projectsData, getProjectsDataFn } = projectsDataFromContext;

  useEffect(() => {
    getProjectsDataFn()
  }, [])
  
console.log(projectsData);
  return (
    <div>
      <h3>Your projects</h3>
      <ul>
        {projectsData.length > 0 && projectsData.map((project: any, i: any) => {
          return <Project key={i} projectData={project} />;
        })}
      </ul>
    </div>
  );
};
export default List;
