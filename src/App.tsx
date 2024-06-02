import React from "react";
import Router from "./pages/Router";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import "./index.css";

const App: React.FC = () => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div className="App">
        <Router />
      </div>
    </FluentProvider>
  );
};

export default App;
