import { useState, useEffect } from "react";
import { FlagsProvider } from "flagged";

import { Home } from "./pages/Home";

const App = () => {
  const [features, setFeatures] = useState<string[]>([]);

  useEffect(() => {
    // TODO: fetch features from server
    setTimeout(() => {
      setFeatures(["PS-12389", "PS-23439"]);
    }, 1000);
  }, []);

  return (
    <FlagsProvider features={features}>
      <div className="App">
        <Home features={features} setFeatures={setFeatures} />
      </div>
    </FlagsProvider>
  );
};

export default App;
