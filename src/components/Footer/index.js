import React from "react";
import { Container } from "./styles";
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <Container>
      <p>
        Desenvolvido por <span>Gabriel Leonel</span>
      </p>
      <section>
        <FaGithubSquare />
        <FaLinkedin />
        <FaWhatsappSquare />
      </section>
    </Container>
  );
}
