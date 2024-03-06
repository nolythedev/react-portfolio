import React from 'react';
import projects from '../utils/projects';
import '../assets/styles/Home.css';


function Home() {

  const recentProject = projects[projects.length - 1];
  const skills = ['Web Development', 'Copywriting', 'Project Management', 'Visual Identity', 'SEO', 'Mobile App Development', 'Code Refactoring', 'Hosting', 'Branding'];

  return (
    <div className='content'>
      {recentProject && (
        <div className="project">
          <img src={recentProject.imageUrl} alt={recentProject.title} className='project-image' />
          <div className="title-container">
            <h3>Featured Project</h3>
            <h3>{recentProject.title}</h3>
          </div>

          {/* Add more project details */}
        </div>
      )}

      <div className="skills">
        <h2 className='h2'>What we do</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <h3>{skill}</h3>
              {/* Add more skill details */}
            </div>
          ))}
        </div>
      </div>

      <div className="recent-work">
        <h2 className='h2'>Recent Projects</h2>
        <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="recent-project">
            <img src={project.imageUrl} alt={project.title} className='recent-project-image'/>
            <h3>{project.title}</h3>
            {/* <p>{project.description}</p> */}
            {/* Add more project details */}
          </div>
        ))}
        </div>
        <div className="button-container">
        <button>See more</button>
        </div>
      </div>


    </div>

  )
}

export default Home