import React from "react";
import { Container, Nav, Title } from "./styles"
import { FiMoon, FiSun } from "react-icons/fi";


export default function Header({onToggleTheme,selectedTheme}) {       console.log(selectedTheme)

  return (
    <Container>
      <Title>&lt;GL/&gt;</Title>
      <Nav>
        <ul>
          <li>
            <a href="#aboutMe">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contacts">Contato</a>
          </li>
          <li>
            {selectedTheme === "dark" ? (
              <FiSun onClick={onToggleTheme} color="#ffffb0" />
            ) : (
              <FiMoon onClick={onToggleTheme} />
            )}
          </li>
        </ul>
      </Nav>
    </Container>
  );
}