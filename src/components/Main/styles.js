import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px auto;
  width: 90%;
`;
export const DivLeft = styled.div`
  img {
    width: 100px;
    border-radius: 100px;
  }
`;
export const DivRight = styled.div``;

export const TecnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  width: 50vh;
  img {
    width: 100%;
  }
  figcaption {
    margin: 1vw 0px 5vh 0px;
  }
`;
