import React from "react";
import Routes from "./routes/Routes";
import ProjectState from "./context/projects/projectState";
const App = () => {
  return (
    <ProjectState>
      <Routes />
    </ProjectState>
  );
};

export default App;
