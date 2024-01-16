import styled from "styled-components";

export const ProfileContainer = styled.section`
  background-color: #151515;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 8vw auto 0px auto;
  width: 70%;
  box-shadow: 0px 3px 14px 4px
    ${(props) => (props.theme.activeTheme == "light" ? "#808080" : "#191919")};
`;
export const DivLeft = styled.section`
  img {
    width: 16rem;
    border-radius: 80%;
  }
`;
export const DivRight = styled.section`
  margin-left: 2vw;
  font-size: 150%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
      color: #ffffff;
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

export const TecnologiesContainer = styled.section`
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

export const AboutMe = styled.section`
  background-color: darkblue;
  margin: 10% auto 5vh auto;
  text-align: center;
  width: 60%;
`;
export const Projects = styled.section`
  width: 70%;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ProjectCard = styled.article`
  margin: 0px auto;
  text-align: center;
  width: 80vh;
  img {
    width: 100%;
  }
  figcaption {
    margin: 1vw 0px 5vh 0px;
  }
`;
