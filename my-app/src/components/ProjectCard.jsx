 // src/components/ProjectCard.jsx
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      <div className="tech-stack">
        {project.techStack.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.demoLink} target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;