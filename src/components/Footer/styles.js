import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${(props) => props.theme.headerBackgroundColor};
  height: 8vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: center;
  font-size: 105%;
  section {
    a {
      color: #ffff;
      font-size: 160%;
    }
  }
  svg {
    color: ${(props) => (props.theme.activeTheme === "dark" ? "#fff" : "#222")};
  }
`;
