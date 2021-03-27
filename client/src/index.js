import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PetProvider } from "../src/components/main/PetContext";
import { PreferenceProvider } from "../src/components/preference/PreferenceContext";
import configureStore from "./store";
import App from "./components/App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PreferenceProvider>
      <PetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PetProvider>
    </PreferenceProvider>
  </Provider>,
  document.getElementById("root")
);
