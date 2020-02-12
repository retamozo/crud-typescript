import React from "react";
import Project from "./Project";

interface IProjectsList {
  projects: Array<any>;
}

const List: React.FC<IProjectsList> = ({ projects }): any => {
  return (
    <div>
      <h3>Your projects</h3>
      <ul>
        {projects.map((project: any, i: any) => {
          return <Project key={i} projectData={project} />;
        })}
      </ul>
    </div>
  );
};
export default List;
