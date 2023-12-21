import React from "react";
import Tecnologies from "./Tecnologies"
import {ProfileContainer, DivRight, DivLeft} from "./styles";

export default function Main() {
  return (
    <ProfileContainer>
      <DivLeft>
        <img
          src="https://www.designi.com.br/images/preview/10495238.jpg"
          width="200px"
        />
      </DivLeft>
      <DivRight>
        <p>Gabriel Leonel,</p>
        <h1>FRONT END DEVELOPER</h1>
        <Tecnologies />
      </DivRight>
    </ProfileContainer>
  );
}
