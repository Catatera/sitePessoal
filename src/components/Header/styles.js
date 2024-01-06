import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5vh 0vh 2.5vh 0vh;
`;
export const Title = styled.h1`
  margin-left: 1vw;
`;

export const Nav = styled.nav`
ul{
  display:flex;
  flex-direction:row;
  gap:2rem;
}
  li {
    display: inline;
    margin: 0px 1vw;
  }
`;
