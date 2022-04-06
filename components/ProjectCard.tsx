import react from 'react'
import { FaGithub } from 'react-icons/fa'
import { IProject } from '../type'



const ProjectCard: React.FC<{project:IProject}> = ({project: {name, category,description,githubUrl,imagePath,lang,deployedUrl}}) => {
  return (
    <div>
        <img src={imagePath} alt={name} className="cursor-pointer"/>
        <p className='my-2 text-center'>{name}</p>

        <div className="grid md:grid-cols-2"></div>
            <div>
                <img src={imagePath} alt={name} />
                <div>
                    <a href={githubUrl}>
                        <FaGithub />
                        <span>Github</span>
                    </a> { deployedUrl ??
                    <a href={deployedUrl}>
                        <FaGithub />
                        <span>Github</span>
                    </a> }
                </div>
            </div>
    
    </div>
  )
}

export default ProjectCard