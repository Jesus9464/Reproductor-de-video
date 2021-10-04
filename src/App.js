import React from "react";
import { Home } from "./pages/Home/index";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Global } from "@emotion/react";
import { GlobalStyle } from "./style/GlobalStyle";
import { ContainerLoading } from "./style/LoadingStyle";
import { useLoading } from "./hooks/useLoading";
import { useGetApiUser } from "./hooks/useGetApiUser";

export const App = () => {
  const { loading } = useLoading();
  const { user } = useGetApiUser();

  if (loading)
    return (
      <ContainerLoading>
        <PacmanLoader size={50} color="red" />
      </ContainerLoading>
    );
  return (
    <>
      <Global styles={GlobalStyle} />
      <Home user={user} />
    </>
  );
};
