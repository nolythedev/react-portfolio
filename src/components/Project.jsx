import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../utils/projects';
import '../assets/styles/Project.css'
import { NavLink } from 'react-router-dom';

function Project() {
  // allows us to grab the id for the url 
  const { id } = useParams();
  // Parse id to match the type in projects data
  const projectId = parseInt(id);
  //searches through the array and returns the first element that satisfies the provided testing function
  const project = projects.find(proj => proj.id === projectId);

  console.log(project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='content'>
      <div className="hero-container" style={{ backgroundImage: `url(${project.imageUrl})` }}></div>
      <div className="project-details-container">
        <div className="project-detail-title">
          <h2>{project.title}</h2>
          <div className="tag-container">
            {project.tag.map((tag, index) => (
              <div key={index} className="tag">
                <h3>{tag}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="project-details">
          <p>{project.description}</p>
        </div>
      </div>
      <div className="button-container">
          <NavLink to='/projectGallery' className="nav-link">
            <button>See more</button>
          </NavLink>
        </div>
    </div>
  );
}

export default Project;
