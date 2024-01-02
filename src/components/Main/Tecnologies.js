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
      <span>
        <DiHtml5 size={"8vh"} color="#e5532d" title="HTML5" />
      </span>
      <span>
        <DiCss3 size={"8vh"} color="#3d9dd7" title="CSS3" />
      </span>
      <span>
        <IoLogoJavascript size={"8vh"} color="#ff0" title="JavaScript" />
      </span>
      <span>
        <DiReact size={"8vh"} color="#66dbfb" title="React" />
      </span>
      <span>
        <DiGit size={"8vh"} color="#f05639" title="Git" />
      </span>
      <span>
        <DiGithubBadge size={"8vh"} color="#ffff" title="GitHub" />
      </span>
      <span>
        <SiStyledcomponents
          size={"8vh"}
          color="#ffff"
          title="Styled Components"
        />
      </span>
      <span>
        <SiBabel size={"8vh"} color="#f9dd44" title="Babel" />
      </span>
      <span>
        <SiWebpack size={"8vh"} color="#92d7fb" title="WebPack" />
      </span>
      <span>
        <DiSass size={"8vh"} color="#c96f9c" title="Sass" />
      </span>
    </TecnologiesContainer>
  );
}
