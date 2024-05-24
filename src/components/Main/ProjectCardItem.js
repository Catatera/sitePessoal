import React from "react";
import { ProjectCard } from "./styles";
export default function ProjectCardItem(props) {

  return (
    <ProjectCard>
    <a href={props.projectLink} target="_blank">
      <figure>
        <img src={props.projectImg}></img>
      </figure>
      <figcaption>
        <h3>{props.projectName}</h3>
          <p>{props.content}</p>
      </figcaption>
            <div>
          {props.usedTecnologies.map((item, index) =>
            (<span key={index}>{item}</span>))
          }
            </div>
        </a>
    </ProjectCard>
  );
}
