import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.headerBackgroundColor};
  box-shadow: 0px 1px 20px 1px
    ${(props) =>
      props.theme.activeTheme === "light"
        ? "#0000003b"
        : `${props.theme.headerBackgroundColor}`};
  height: 5vh;
`;
export const Title = styled.h1`
  font-size:135%;
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
    margin-left:-5%;
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
      color: #18d0ffde;
    }
    svg{
      transition:0.2s;
      cursor: pointer;
    }
  }
`;
