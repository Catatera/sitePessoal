import React from "react";
import { ProjectCard } from "./styles";
import placeholder from "./images/feia.jpeg";
export default function ProjectCardItem(props) {
  return (
    <ProjectCard>
      <figure>
        <img src={placeholder}></img>
          </figure>
          <figcaption>
              feia
        </figcaption>
    </ProjectCard>
  );
}
