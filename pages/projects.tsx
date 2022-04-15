import React, { useEffect, useState } from "react";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { category } from "../type";

function Projects() {
  const [filter, SetFilter] = useState(projects);
  const [navbarState, setNavBarState] = useState("all");

  const handleFilters = (category: category | "all") => {
    if (category == "all") {
      SetFilter(projects);
      setNavBarState("all");
      return;
    }
    var a = projects.filter((project) => project.category.includes(category));
    SetFilter(a);
    setNavBarState(category);
    return;
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectNavbar handleFilter={handleFilters} active={navbarState} />

      <div className="relative grid grid-cols-12 gap-4 my-3 ">
        {filter.map((project) => (
          <div className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
