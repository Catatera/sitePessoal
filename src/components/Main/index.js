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
      <AboutMe id="aboutMe" style={{ fontSize: "clamp(1em, 0.2em + 3.3vw, 1.5em)" }}>
        <h2>Sobre Mim</h2>
        <p >
          Meu nome é Gabriel Leonel e sou apaixonado por tecnologia,
          especificamente na área de desenvolvimento WEB. Atualmente
          sou um estudante de programação pelo CST de Sistemas para Internet,
          me empenhando para me tornar um desenvolvedor FullStack. Possuo domínio das
          tecnologias fundamentais para o Front-End: <span>HTML, CSS e JS</span>,
          juntamente com o FrameWork <span>React.js</span> com <span>Styled Components</span> para a estilização, me permitindo criar
          aplicações interativas para o lado do cliente. Atualmente, estou me dedicando ao <span>Node.js</span> e <span>MySQL</span> para também desenvolver no Back-End. Estou em busca de novas
          experiências profissionais e procurando melhorar minhas habilidades na
          área da programação.
        </p>
      </AboutMe>
      <Projects id="projects">
        <ProjectCardItem projectId={1} projectName={projectGetKcalImg} />
        <ProjectCardItem projectId={2} />
      </Projects>
    </main>
  );
}
