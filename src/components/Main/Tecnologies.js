import React from "react";
import { TecnologiesContainer } from "./styles";
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiGit,
  DiGithubBadge,
  DiSass,
} from "react-icons/di";
import { SiBabel, SiStyledcomponents, SiWebpack } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export default function Tecnologies() { 
  return (
    <TecnologiesContainer>
      <span aria-label="HTML5">
        <DiHtml5 size={"8vh"} />
      </span>
      <span aria-label="CSS3">
        <DiCss3 size={"8vh"}  />
      </span>
      <span aria-label="JavaScript">
        <IoLogoJavascript size={"8vh"} />
      </span>
      <span aria-label="React">
        <DiReact size={"8vh"} />
      </span>
      <span aria-label="Git">
        <DiGit size={"8vh"} />
      </span>
      <span aria-label="GitHub">
        <DiGithubBadge size={"8vh"} />
      </span>
      <span aria-label="Styled Components">
        <SiStyledcomponents size={"8vh"} />
      </span>
      <span aria-label="Babel">
        <SiBabel size={"8vh"} />
      </span>
      <span aria-label="WebPack">
        <SiWebpack size={"8vh"} />
      </span>
      <span aria-label="Sass">
        <DiSass size={"8vh"} />
      </span>
    </TecnologiesContainer>
  );
}
