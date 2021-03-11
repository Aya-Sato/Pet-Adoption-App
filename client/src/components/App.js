import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
