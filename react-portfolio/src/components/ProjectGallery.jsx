import React from 'react'
import projects from '../utils/projects';
import '../assets/styles/ProjectGallery.css';

function ProjectGallery() {
  return (
    <div className='content'>ProjectGallery
     <div className="projects">
        {projects.map(project => (
          <div key={project.id} className="project">
            <img src={project.imageUrl} alt={project.title} className='project-image'/>
            <h3>{project.title}</h3>
            {/* <p>{project.description}</p> */}
            {/* Add more project details */}
          </div>
        ))}
      </div>
    
    </div>
    
  )
}

export default ProjectGallery