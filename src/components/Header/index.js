import React from "react";
import { Container, Nav, Title } from "./styles"
import { CiSun } from "react-icons/ci";

export default function Header() { 
    return (
      <Container>
        <Title>Gabriel Leonel</Title>
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
              <CiSun /* onClick={} *//>
            </li>
          </ul>
        </Nav>
      </Container>
    );
}