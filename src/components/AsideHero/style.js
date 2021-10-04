import styled from "@emotion/styled";

export const ContainerHero = styled.div`
  padding: ${(props) => (props.screen ? "20px 0" : "20px")};
  width: ${(props) => (props.screen ? "100%" : "50%")};
  background-color: ${(props) => props.theme.secundary};
`;
export const BoxDisplayRange = styled.div`
  position: relative;
`;

export const Video = styled.video`
  cursor: pointer;
  background-color: black;
`;

export const InputVideo = styled.input`
  width: 100%;
  bottom: 10px;
  position: absolute;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

export const ContainerButton = styled.div`
  display: flex;
  width: auto;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
  font-size: 19px;
  padding: 5px 30px;
`;

export const ContainerHeroButton = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 5px;
  border: none;
  background-color: ${(props) => (props.dark ? "#34495e" : "#ea2027")};
  color: white;
  padding: 6px;

  :hover {
    color: black;
    background-color: ${(props) => (props.dark ? "#34499e" : "#ea2010")};
  }
`;

export const ContainerVolumen = styled.div`
  display: flex;

  &:hover {
    Input {
      display: block;
      transition: 0.5s;
    }
  }
`;

export const Input = styled.input`
  display: none;
`;
