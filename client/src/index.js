import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PetProvider } from "../src/components/main/PetContext";
import configureStore from "./store";
import App from "./components/App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PetProvider>
  </Provider>,
  document.getElementById("root")
);
