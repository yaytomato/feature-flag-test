import React, { useState, useEffect } from "react";
import { FlagsProvider } from "flagged";

import { Home } from "./pages/Home";

const App = () => {
  const [features, setFeatures] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // TODO: fetch features from server
    setTimeout(() => {
      setFeatures({ newFeature: true, thisFeature: true });
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
