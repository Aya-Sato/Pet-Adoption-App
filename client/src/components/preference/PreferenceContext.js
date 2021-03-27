import React, { useState, createContext } from "react";

export const PreferenceContext = createContext();

export const PreferenceProvider = ({ children }) => {
  const [preference, setPreference] = useState({});

  return (
    <PreferenceContext.Provider
      value={{
        preference,
        setPreference,
      }}
    >
      {children}
    </PreferenceContext.Provider>
  );
};
