import { useContext } from "react";
import { ContextLoading } from "../ContextLoading";

export const useLoading = () => {
  const loadingContext = useContext(ContextLoading);
  if (!loadingContext) {
    throw new Error("el context de loading no existe");
  }

  return loadingContext;
};
