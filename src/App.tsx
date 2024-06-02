import React from "react";
import HomePage from "./pages/HomePage";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import "./index.css";

const App: React.FC = () => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div className="App">
        <HomePage />
      </div>
    </FluentProvider>
  );
};

export default App;
