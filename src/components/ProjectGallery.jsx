import React from 'react'
import projects from '../utils/projects';
import '../assets/styles/ProjectGallery.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProjectGallery() {
  return (
    <div className='content'>
      <div className="projects">
        {projects.map(project => (
          <div key={project.id} className="project">
            <Link key={project.id} to={{ pathname: `/project/${project.id}` }}>
              <img src={project.imageUrl} alt={project.title} className='project-image' />
            </Link>
            <h3>{project.title}</h3>
            {/* <p>{project.description}</p> */}
            {/* Add more project details */}
          </div>
        ))}
      </div>
      <div className="button-container">
        <NavLink to='/contact' className="nav-link">
          <button>Let's work together</button>
        </NavLink>
      </div>
    </div>

  )
}

export default ProjectGallery