import React from 'react';
import projects from '../utils/projects';
import '../assets/styles/Home.css';
import { NavLink } from 'react-router-dom';


function Home() {

  const recentProject = projects[projects.length - 1];
  const skills = ['Web Development', 'Copywriting', 'Project Management', 'Visual Identity', 'SEO', 'Mobile App Development', 'Code Refactoring', 'Hosting', 'Branding'];

  return (
    <div className='content'>
      {recentProject && (
        <div className="hero-project">
          <div className="hero-container" style={{ backgroundImage: `url(${recentProject.imageUrl})` }}>
          </div>
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
        {projects.slice(0, 2).map(project => (
            <div key={project.id} className="recent-project">
              <img src={project.imageUrl} alt={project.title} className='recent-project-image' />
              <h3>{project.title}</h3>
              {/* <p>{project.description}</p> */}
              {/* Add more project details */}
            </div>
          ))}
        </div>
        <div className="button-container">
          <NavLink to='/projectGallery' className="nav-link">
            <button>See more</button>
          </NavLink>
        </div>
      </div>


    </div>

  )
}

export default Home