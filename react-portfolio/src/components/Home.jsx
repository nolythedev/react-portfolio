import React from 'react'
import projects from '../utils/projects'

function Home() {

  const recentProject = projects[projects.length - 1];
  return (
    <div className='content'>
      {recentProject && (
        <div className="project">
          <img src={recentProject.imageUrl} alt={recentProject.title} className='project-image' />
          <h3>{recentProject.title}</h3>

          {/* Add more project details */}
        </div>
      )}
      
      Home</div>
  )
}

export default Home