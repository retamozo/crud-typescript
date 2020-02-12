import React from "react";

const Project = ({ projectData }: any) => {
  const { name } = projectData;
  return (
    <div>
      <h3> {name} </h3>
    </div>
  );
};
export default Project;
