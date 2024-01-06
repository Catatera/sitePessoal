import styled from "styled-components";

export const ProfileContainer = styled.section`
  background-color: green;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 7vh auto 0px auto;
  width: 70%;
`;
export const DivLeft = styled.div`
  img {
    width: 17rem;
  }
`;
export const DivRight = styled.div`
  margin-left: 2vw;
  font-size: 150%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  div:hover > :not(:hover) {
    opacity: 0.2;
    transform: scale(0.9);
  }
`;

export const TecnologiesContainer = styled.div`
  span {
    
    position: relative;
    transition: 0.35s;
    cursor: pointer;
    &:hover::after {content:attr(aria-label);
      opacity: 1;
      pointer-events: all;
      margin-bottom: 0;
      left:0;
      bottom: 10vh;
    }
    &::after {
      position: absolute;
      opacity: 0;
      line-height: 25px;
      padding: 0 10px;
      font-size: 1.2rem;
      text-align: center;
      background: #222;
      border-radius: 4px;
      white-space: nowrap;
    }
  }
`;

export const AboutMe = styled.section`
  background-color: darkblue;
  margin: 0px auto;
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
