import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../utils/projects';

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
      <h2>{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      {/* Render more details of the project as needed */}
    </div>
  );
}

export default Project;
