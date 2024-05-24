import React from "react";
import Tecnologies from "./Tecnologies";
import ProjectCardItem from "./ProjectCardItem";
import projectGetKcalImg from "./images/projectImg/projectGetKcal.jpeg";
import projectMenu from "./images/projectImg/projectMenu.jpeg";
import projectCounter from "./images/projectImg/projectCounter.jpeg";
import projectMyContacts from "./images/projectImg/projectMyContacts.jpeg";
import projectColorSorter from "./images/projectImg/projectColorSorter.jpeg";
import projectNetuno from "./images/projectImg/projectNetuno.jpeg";

import { ProfileContainer, ProfileButtons, AboutMe, Projects } from "./styles";
import profileImg from "./images/bonito.jpeg";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaJs, FaHtml5, FaCss3, FaReact, FaNode, FaLinkedin } from "react-icons/fa";

const allTecnologies = [
  <FaHtml5 size="30px" />,
  <FaCss3 size="30px" />,
  <FaJs size="30px" />,
  <FaReact size="30px" />,
  <FaNode size="30px" />,
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
        <a
          href="https://www.linkedin.com/in/gabriel-leonel-silva/"
          target="_blank"
        >
          <button className="linkedIn">
            <FaLinkedin />
            LinkedIn
          </button>
        </a>
        <a href="https://github.com/catatera" target="_blank">
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
          <span>CSS</span>, <span>JavaSript</span>, <span>React</span>,{" "}
          <span>Styled-Components</span>, <span>SASS</span>, <span>Git</span> e{" "}
          <span>GitHub</span>.
        </p>
      </AboutMe>
      <Projects id="projects">
        <ProjectCardItem
          projectLink={""}
          projectName={"MyContacts - Em desenvolvimento"}
          projectImg={projectMyContacts}
          content={`Aplicação completa de gerenciamento de contatos`}
          usedTecnologies={allTecnologies.slice(0, 5)}
        />
        <ProjectCardItem
          projectLink={"https://catatera.github.io/netuno-landing-page/"}
          projectName={"Fasters Netuno"}
          projectImg={projectNetuno}
          content={`Landing page desenvolvida para o projeto Netuno dedicado à empresa Fasters.`}
          usedTecnologies={allTecnologies.slice(0, 2)}
        />
        <ProjectCardItem
          projectLink={"https://catatera.github.io/caloriesCalculator/"}
          projectName={"getKcal"}
          projectImg={projectGetKcalImg}
          content={`Uma ferramenta para ajudar os usuários a calcularem sua taxa metabólica basal.`}
          usedTecnologies={allTecnologies.slice(0, 3)}
        />
        <ProjectCardItem
          projectLink={"https://catatera.github.io/projetos/projeto08"}
          projectName={"Cálculo de porcentagem"}
          projectImg={projectCounter}
          content={`Ferramenta front-end de cálculo de porcentagens.`}
          usedTecnologies={allTecnologies.slice(0, 3)}
        />
        <ProjectCardItem
          projectLink={"https://catatera.github.io/projetos/faculdade/fprojeto01/"}
          projectName={"Livro de Receitas"}
          projectImg={projectMenu}
          content={`Um livro de receitas cativante e convidativo.`}
          usedTecnologies={allTecnologies.slice(0, 3)}
        />
        <ProjectCardItem
          projectLink={"https://catatera.github.io/projetos/projeto06"}
          projectName={"Sorteador de cores"}
          projectImg={projectColorSorter}
          content={`Seleciona códigos hexadecimais aleatórios`}
          usedTecnologies={allTecnologies.slice(0, 3)}
        />
      </Projects>
    </main>
  );
}
