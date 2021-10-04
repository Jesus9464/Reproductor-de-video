import React, { createContext, useState } from "react";

export const ContextLoading = createContext(null);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoadig] = useState(true);

  const updateLoading = (state) => setLoadig(state);

  return (
    <ContextLoading.Provider
      value={{
        loading,
        updateLoading,
      }}
    >
      {children}
    </ContextLoading.Provider>
  );
};
