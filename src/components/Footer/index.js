import React from "react";
import { Container } from "./styles";
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <Container>
      <p>
        Desenvolvido por{" "}
        <a href="https://github.com/catatera" target="_blank">
          Gabriel Leonel
        </a>
      </p>
      <section>
        <a href="https://github.com/catatera" target="_blank">
          <FaGithubSquare style={{ margin: "0px 0.5em" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-leonel-silva/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://wa.me/5535987130395" target="_blank">
          <FaWhatsappSquare style={{ margin: "0px 0.5em" }} />
        </a>
      </section>
    </Container>
  );
}
