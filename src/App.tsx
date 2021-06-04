import React from "react";
import { NewFeature } from "./components/NewFeature";
import { OldFeature } from "./components/OldFeature";

const App = () => {
  return (
    <div className="App">
      <OldFeature />
      <NewFeature />
    </div>
  );
};

export default App;
