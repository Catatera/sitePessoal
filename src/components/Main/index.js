import React from "react";
import Tecnologies from "./Tecnologies";
import ProjectCardItem from "./ProjectCardItem";
import {
  ProfileContainer,
  DivRight,
  DivLeft,
  ProfileButtons,
  AboutMe,
  Projects,
} from "./styles";
import imgPerfil from "./images/bonito.jpeg";

export default function Main() {
  return (
    <main>
      <ProfileContainer>
        <DivLeft>
          <img src={imgPerfil} />
        </DivLeft>
        <DivRight>
          <section>
            <p>Olá, eu sou o Gabriel</p>
            <h1>Desenvolvedor Front-End</h1>
          </section>
          <Tecnologies />
        </DivRight>
      </ProfileContainer>
      <ProfileButtons>
        <a href="">
          <button>LinkedIn</button>
        </a>
        <a href="">
          <button>GitHub</button>
        </a>
      </ProfileButtons>
      <AboutMe id="aboutMe">
        <h2>About Me</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </AboutMe>
      <Projects id="projects">
        <ProjectCardItem idProjeto={1} />
        <ProjectCardItem idProjeto={2} />
      </Projects>
    </main>
  );
}
