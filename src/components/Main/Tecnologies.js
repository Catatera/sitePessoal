import React from "react";
import { DiHtml5, DiCss3, DiReact, DiJsBadge, DiGit, DiGithubBadge, DiSass } from "react-icons/di";
import { SiBabel, SiStyledcomponents, SiWebpack,SiSass } from "react-icons/si";

export default function Tecnologies() {
  return (
    <>
      <div>
        <DiHtml5 size={"75"} color="#e5532d" />
        <DiCss3 size={"75"} color="#3d9dd7" />
        <DiJsBadge size={"70"} color="#ff0" />
        <DiReact size={"75"} color="#66dbfb" />
        <DiGit size={"75"} color="#f05639" />
        <DiGithubBadge size={"75"} color="#ffff" />
        <SiStyledcomponents size={"75"} color="#ffff" />
        <SiBabel size={"56"} color="#f9dd44" />
        <SiWebpack size={"56"} color="#92d7fb" />
        <DiSass size={"60"} color="#c96f9c" />
      </div>
    </>
  );
}
