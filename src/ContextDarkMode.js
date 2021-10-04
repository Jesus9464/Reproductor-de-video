import React, { useState, createContext } from "react";

export const ContextDark = createContext({});

export const ProviderDark = ({ children }) => {
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem("theme") || "ligth"
  );

  const value = {
    theme,

    activeDark: (value) => {
      // document.body.style.backgroundColor = `${
      //   value === "dark" ? "#323232" : "white"
      // }`;
      window.localStorage.setItem("theme", value);
      setTheme(value);
    },
  };

  return <ContextDark.Provider value={value}>{children}</ContextDark.Provider>;
};
