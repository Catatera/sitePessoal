import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5vh 0vh 2.5vh 0vh;
  background-color: ${(props) => props.theme.headerBackgroundColor};
  box-shadow: 0px 1px 20px 1px
    ${(props) => (props.theme.activeTheme === "light" ? "#0000003b" : "none")};
`;
export const Title = styled.h1`
  margin-left: 1%;
  color: #18d0ffde;
  &:hover {
    transition: 0.35s;
    color: #18d0ffde;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
  }
  li {
    display: inline;
    margin: 0px 1vw;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.textColor};
    }
    a:hover {
      transition: 0.2s;
      color: #808080;
    }
  }
`;
