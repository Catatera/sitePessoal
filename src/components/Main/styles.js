import styled from "styled-components";

export const ProfileContainer = styled.section`
  background-color: ${(props) =>
    props.theme.activeTheme == "light" ? "#f2f2f2" : "#191919"};
  border-radius: 0.5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 8vw auto 0px auto;
  padding: 2vw 0px;
  width: 80%;
  max-width: 1250px;
  box-shadow: 0px 3px 10px 1px
    ${(props) => (props.theme.activeTheme == "light" ? "#808080" : "#191919")};
  #divLeft {
    img {
      width: 16rem;
      border-radius: 2%;
    }
  }
  #divRight {
    margin-left: 2%;
    font-size: 150%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    p,
    h1 {
      margin: 0px 20px;
    }
    h1 {
      color: #18d0ffde;
    }
  }
`;

export const TecnologiesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  margin: 0px 7px;
  svg {
    &:hover::after {
      content: attr(aria-label);
      opacity: 1;
      pointer-events: all;
      margin-bottom: 0;
    }
    &::after {
      position: absolute;
      opacity: 0;
      line-height: 25px;
      padding: 0 10px;
      font-size: 1.2rem;
      text-align: center;
      background: #000000d9;
      border-radius: 4px;
      white-space: nowrap;
    }
  }
  &:hover {
    color: #18d0ffde;
  }
  &:hover > :not(:hover) {
    color: #fff;
    opacity: 0.2;
    transform: scale(0.9);
    position: relative;
    transition: 0.35s;
    cursor: pointer;
  }
`;

export const ProfileButtons = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    margin: 3% 3%;
    button {
      background: transparent;
      position: relative;
      padding: 1vw 2vh;
      display: flex;
      font-size: 1.2rem;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid #ffffff00;
      border-radius: 25px;
      outline: none;
      overflow: hidden;
      color: ${(props) =>
        props.theme.activeTheme == "light" ? "#222" : "#ffff"};
      transition: color 0.3s 0.1s ease-out;
      text-align: center;
    }
    button::before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      content: "";
      border-radius: 50%;
      display: block;
      width: 20em;
      height: 20em;
      left: -5em;
      text-align: center;
      transition: box-shadow 0.3s ease-out;
      z-index: -1;
    }
    button:hover {
      color: #fff;
    }
    .linkedIn:hover::before {
      box-shadow: inset 0 0 0 10em #0a66c2;
    }
    .gitHub:hover::before {
      box-shadow: inset 0 0 0 10em #6e5494;
    }
  }
`;

export const AboutMe = styled.section`
  background-color: ${(props) =>
    props.theme.activeTheme == "light" ? "#f2f2f2" : "#191919"};
  box-shadow: 0px 5px 10px 0px
    ${(props) => (props.theme.activeTheme == "light" ? "#808080" : "#191919")};
  text-align: center;
  margin: 17% auto;
  width: 70%;
  max-width: 1250px;
  h2 {
    padding: 3% 0px 1vh 0px;
  }
  p {
    line-height: 150%;
    letter-spacing: 0.08rem;
    margin: 0px 6vw;
    padding-bottom: 3%;
    span {
      color: #18d0ffde;
    }
  }
`;
export const Projects = styled.section`
  width: 70%;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ProjectCard = styled.article`
text-decoration:none;
  margin: 5% auto;
  text-align: center;
  width: 80vh;

  img {
    width: 100%;
  }
  figcaption {
    margin: 1vw 0px 5vh 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;
    p {
      line-height: 150%;
      letter-spacing: 0.05rem;
    }
  }
  svg {
    color: ${(props) => (props.theme.activeTheme === "dark" ? "#fff" : "#222")};
  }
`;
