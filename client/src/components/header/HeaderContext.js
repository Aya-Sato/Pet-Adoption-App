import React, { useState, createContext } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [active, setActive] = useState("main");

  return (
    <HeaderContext.Provider
      value={{
        active,
        setActive,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
