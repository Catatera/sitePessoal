import React from "react";
import {Container, Nav, Title} from "./styles"

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
          </ul>
        </Nav>
      </Container>
    );
}