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
        <DiHtml5 size={"8vh"} color="#e5532d" />
      </span>
      <span aria-label="CSS3">
        <DiCss3 size={"8vh"} color="#3d9dd7" />
      </span>
      <span aria-label="JavaScript">
        <IoLogoJavascript size={"8vh"} color="#ff0" />
      </span>
      <span aria-label="React">
        <DiReact size={"8vh"} color="#66dbfb" />
      </span>
      <span aria-label="Git">
        <DiGit size={"8vh"} color="#f05639" />
      </span>
      <span aria-label="GitHub">
        <DiGithubBadge size={"8vh"} color="#ffff" />
      </span>
      <span aria-label="Styled Components">
        <SiStyledcomponents size={"8vh"} color="#ffff" />
      </span>
      <span aria-label="Babel">
        <SiBabel size={"8vh"} color="#f9dd44" />
      </span>
      <span aria-label="WebPack">
        <SiWebpack size={"8vh"} color="#92d7fb" />
      </span>
      <span aria-label="Sass">
        <DiSass size={"8vh"} color="#c96f9c" />
      </span>
    </TecnologiesContainer>
  );
}
