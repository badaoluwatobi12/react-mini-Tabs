import React from "react";
import { Route, Routes } from "react-router-dom";

import Tabs from "./tabs";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/tabs" element={<Tabs />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;