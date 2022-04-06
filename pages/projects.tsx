import React from 'react'
import { projects } from '../data'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
   <div>
      <nav>NavBar</nav>

      <div>
      {
        projects.map(project => (
          <div>
            <ProjectCard   />
          </div>
        ))
      }

      </div>



    </div>
  )
}

export default Projects