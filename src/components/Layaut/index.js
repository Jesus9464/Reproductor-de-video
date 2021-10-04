import React, { useContext } from "react";
import LogoMusic from "../../images/musica.svg";

import {
  MdFormatListBulleted,
  MdMic,
  MdApps,
  MdNotificationsNone,
} from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import {
  Header,
  Container,
  Image,
  Input,
  Button,
  ContainerPerfil,
  ImgUser,
  DarkModeButton,
  DarkMode,
  SunModeButton,
} from "./style";
import { ContextDark } from "../../ContextDarkMode";

export const Layaut = ({ user }) => {
  const imageUser = user.results[0].picture.thumbnail;
  const { activeDark, theme } = useContext(ContextDark);

  return (
    <Header>
      <Container>
        <MdFormatListBulleted size="30" cursor="pointer" />
        <Image src={LogoMusic} alt="" />
      </Container>
      <Container>
        <Input dark={theme === "dark"} type="text" />
        <Button dark={theme === "dark"}>
          <BsSearch />
        </Button>
        <MdMic size="26" />
      </Container>
      <ContainerPerfil>
        <DarkMode>
          <SunModeButton
            dark={theme === "dark"}
            onClick={() => activeDark("ligth")}
          >
            <BsSun />
          </SunModeButton>
          <DarkModeButton
            dark={theme === "dark"}
            onClick={() => activeDark("dark")}
          >
            <BsMoon />
          </DarkModeButton>
        </DarkMode>
        <AiOutlineVideoCameraAdd size="24" />
        <MdApps size="24" />
        <MdNotificationsNone size="24" />
        <ImgUser src={imageUser} alt="" />
      </ContainerPerfil>
    </Header>
  );
};
