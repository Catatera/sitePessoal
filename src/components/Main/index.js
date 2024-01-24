import React from "react";
import Tecnologies from "./Tecnologies";
import ProjectCardItem from "./ProjectCardItem";
import projectGetKcalImg from "./images/projectGetKcal.png";

import { ProfileContainer, ProfileButtons, AboutMe, Projects } from "./styles";
import profileImg from "./images/bonito.jpeg";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaJs, FaHtml5, FaCss3, FaLinkedin } from "react-icons/fa";

const allTecnologies = [
  <FaHtml5 size="30px" />,
  <FaCss3 size="30px" />,
  <FaJs size="30px" />,
];
export default function Main() {
  return (
    <main>
      <ProfileContainer>
        <section id="divLeft">
          <img src={profileImg} />
        </section>
        <section id="divRight">
          <p>Olá, eu sou o Gabriel</p>
          <h1>Desenvolvedor Front-End</h1>
          <Tecnologies />
        </section>
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
          Internet, me empenhando para me tornar um desenvolvedor{" "}
          <span>Front-End</span>, de modo que possa transformar minhas ideias em
          realidade, combinando habilidades técnicas e criatividade. Possuo
          domínio das principais tecnologias do mercado: <span>HTML</span>,{" "}
          <span>CSS</span>, <span>JavaSript</span>,<span>React</span>,{" "}
          <span>Styled-Components</span>, <span>SASS</span>,<span>Git</span> e{" "}
          <span>GitHub</span>.
        </p>
      </AboutMe>
      <Projects id="projects">
        <ProjectCardItem
          projectName={"CaloriesCalculator"}
          projectImg={projectGetKcalImg}
          content={`Um site para ajudar os usuários a calcularem sua taxa metabólica basal. O  usuário deve digitar suas informações fisiológicas, como sexo, idade, altura e peso. Em seguida, ao informar seu nível de atividade física diário, o formulário irá devolver todas as informações para o usuário, como sua taxa metabólica basal, a quantidade de calorias a serem ingeridas diariamente caso deseje manter, aumentar ou perder seu peso atual.`}
          usedTecnologies={allTecnologies.slice(0, 2)}
        />
        {/* <ProjectCardItem projectName={"em andamento"} usedTecnologies={[""]} /> */}
      </Projects>
    </main>
  );
}
