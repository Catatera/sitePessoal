import React from "react";
import { ProjectCard } from "./styles";
import placeholder from "./images/feia.jpeg";
export default function ProjectCardItem(props) {
  return (
    <ProjectCard>
      <figure>
        <img
          src={
            "https://www.rpnation.com/gallery/250-x-250-placeholder.30091/full?d=1504582354"
          }
        ></img>
      </figure>
      <figcaption>
        <h3>Projeto #1</h3>
        <p>Lorem</p>
      </figcaption>
    </ProjectCard>
  );
}
