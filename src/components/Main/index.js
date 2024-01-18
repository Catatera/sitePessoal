import React from "react";
import Tecnologies from "./Tecnologies";
import ProjectCardItem from "./ProjectCardItem";
import projectGetKcalImg from "./images/projectGetKcal.png";

import {
  ProfileContainer,
  DivRight,
  DivLeft,
  ProfileButtons,
  AboutMe,
  Projects,
} from "./styles";
import profileImg from "./images/bonito.jpeg";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";

export default function Main() {
  return (
    <main>
      <ProfileContainer>
        <DivLeft>
          <img src={profileImg} />
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
          <button className="linkedIn">
            <FaLinkedin />
            LinkedIn
          </button>
        </a>
        <a href="">
          <button className="gitHub">
            <TbBrandGithubFilled />
            GitHub
          </button>
        </a>
      </ProfileButtons>
      <AboutMe
        id="aboutMe"
        style={{ fontSize: "clamp(1em, 0.2em + 3.3vw, 1.5em)" }}
      >
        <h2>Sobre Mim</h2>
        <p>
          Meu nome é Gabriel Leonel e sou apaixonado por tecnologia, mais
          especificamente na área de desenvolvimento WEB. Atualmente sou um
          estudante de programação pelo curso Tecnólogo de Sistemas para
          Internet, me empenhando para me tornar um desenvolvedor
          <span>Front-End</span>, de modo que possa transformar minhas ideias em realidade, combinando habilidades técnicas e criatividade. Possuo domínio das principais tecnologias do
          mercado: <span>HTML</span>, <span>CSS</span>, <span>JavaSript</span>,
          <span>React</span>, <span>Styled-Components</span>, <span>SASS</span>,
          <span>Git</span> e <span>GitHub</span>.
        </p>
      </AboutMe>
      <Projects id="projects">
        <ProjectCardItem projectName={"CaloriesCalculator"} projectImg={projectGetKcalImg}/>
        <ProjectCardItem projectName={"em andamento"} />
      </Projects>
    </main>
  );
}
