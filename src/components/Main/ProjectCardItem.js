import React from "react";
import { ProjectCard } from "./styles";
/* import { FaJs, FaHtml5, FaCss3 } from "react-icons/fa6";
 */ export default function ProjectCardItem(props) {

  return (
    <ProjectCard>
      <figure>
        <img src={props.projectImg}></img>
      </figure>
      <figcaption>
        <h3>Projeto {props.projectName}</h3>
        <p>{props.content}</p>
        {props.usedTecnologies.map((item,index) => (
          <p key={index}>{item}</p>
        ))}
      </figcaption>
    </ProjectCard>
  );
}
