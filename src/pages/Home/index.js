import React from "react";
import { AsideHero } from "../../components/AsideHero";
import { Layaut } from "../../components/Layaut";
import { ContainerPrincipal } from "./style";

export const Home = ({ user }) => {
  return (
    <>
      <Layaut user={user} />
      <ContainerPrincipal>
        <AsideHero />
      </ContainerPrincipal>
    </>
  );
};
