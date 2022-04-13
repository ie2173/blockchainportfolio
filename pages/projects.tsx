import React from "react";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <nav>NavBar</nav>

      <div className="relative grid grid-cols-12 gap-4 my-3 ">
        {projects.map((project) => (
          <div className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
