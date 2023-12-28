import React from "react";
import {Container, Nav, Title} from "./styles"

export default function Header() { 
    return (
      <Container >
        <Title>Gabriel Leonel</Title>
        <Nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </Nav>
      </Container>
    );
}