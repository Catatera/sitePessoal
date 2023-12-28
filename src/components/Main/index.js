import React from "react";
import Tecnologies from "./Tecnologies";
import { ProfileContainer, DivRight, DivLeft, AboutMe } from "./styles";
import imgPerfil from "./images/feia.jpeg";

export default function Main() {
  return (
    <main>
      <ProfileContainer>
        <DivLeft>
          <img src={imgPerfil} width="100px" />
        </DivLeft>
        <DivRight>
          <p>Gabriel Leonel,</p>
          <h1>FRONT END DEVELOPER</h1>
          <Tecnologies />
        </DivRight>
      </ProfileContainer>
      <AboutMe>
        <h2>About Me</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </AboutMe>
    </main>
  );
}
