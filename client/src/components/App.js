import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./Authentication";

import Routes from "./Routes";

const App = () => {
  return (
    <AppProvider>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  );
};

export default App;
