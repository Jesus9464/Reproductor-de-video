import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ContextDark, ProviderDark } from "./ContextDarkMode";
import { LoadingProvider } from "./ContextLoading";
import { ThemeProvider } from "@emotion/react";

const container = document.getElementById("root");

const themeDark = {
  color: "#060606",
  secundary: "#323232",
  buttonColor: "#ea2027",
  letter: "white",
  border: "1px",
};

const themeLight = {};

const DarkMode = () => {
  const { theme } = useContext(ContextDark);

  return (
    <ThemeProvider theme={theme === "dark" ? themeDark : themeLight}>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <ProviderDark>
    <DarkMode />
  </ProviderDark>,
  container
);
