import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${(props) => props.theme.headerBackgroundColor};
  box-shadow: 0px 1px 7px 2px
    ${(props) => (props.theme.activeTheme === "light" ? "#0000003b" : "none")};
  height: 8vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: center;
  font-size: 105%;
  a{
    text-decoration:none;
    color:#18d0ffde;
  }
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
