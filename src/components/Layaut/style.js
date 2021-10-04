import styled from "@emotion/styled";

export const Header = styled.div`
  padding-top: 10px;
  height: 50px;
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  padding: 0 30px;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.letter};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 40px;
`;

export const Image = styled.img`
  width: 25px;
  margin-left: 40px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 70%;
  height: 50%;
  padding-left: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: ${({ dark }) => (dark ? "none" : "1px solid black")};
  color: ${(props) => props.theme.letter};
  margin-left: 20px;
  background-color: ${(props) => props.theme.secundary};
  outline: none;
`;

export const Button = styled.button`
  width: 60px;
  padding-top: 5px;
  height: ${({ dark }) => (dark ? "54%" : "58%")};
  margin-right: 25px;
  border: ${({ dark }) => (dark ? "none" : "0.1px solid")};
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border-left: 0.2px solid grey;
  color: ${({ dark }) => (dark ? "white" : "black")};
  background-color: ${(props) => props.theme.secundary};
`;

export const ImgUser = styled.img`
  border-radius: 50%;
  width: 35px;
`;

export const DarkMode = styled.div`
  border: 1px solid;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  width: auto;
`;

export const DarkModeButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 25px;
  border: none;
  display: flex;
  align-items: center;
  outline: none;
  justify-content: center;
  background-color: ${({ dark }) => (dark ? "black" : "white")};
  color: ${(props) => props.theme.letter};
`;

export const SunModeButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 25px;
  border-right: 1px solid;
  border: none;
  display: flex;
  align-items: center;
  background-color: white;
  color: ${({ dark }) => (dark ? "balck" : "#f1c40f")};
`;
