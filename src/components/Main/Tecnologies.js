import React from "react";
import { TecnologiesContainer } from "./styles";
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiJsBadge,
  DiGit,
  DiGithubBadge,
  DiSass,
} from "react-icons/di";
import { SiBabel, SiStyledcomponents, SiWebpack } from "react-icons/si";

export default function Tecnologies() {
  return (
      <TecnologiesContainer>
        <DiHtml5 size={"7vh"} color="#e5532d" />
        <DiCss3 size={"7vh"} color="#3d9dd7" />
        <DiJsBadge size={"7vh"} color="#ff0" />
        <DiReact size={"7vh"} color="#66dbfb" />
        <DiGit size={"7vh"} color="#f05639" />
        <DiGithubBadge size={"7vh"} color="#ffff" />
        <SiStyledcomponents size={"7vh"} color="#ffff" />
        <SiBabel size={"7vh"} color="#f9dd44" />
        <SiWebpack size={"7vh"} color="#92d7fb" />
        <DiSass size={"7vh"} color="#c96f9c" />
      </TecnologiesContainer>
  );
}
