import "../Styles/Projects.css";

const projects = [
  {
    number: "01",
    title: "MatPåFarten",
    type: "TEAM PROJECT",
    description:
      "A modern food ordering application built as part of a collaborative development project. Users can browse restaurants, search and filter food, view product details, and manage their order through a responsive interface.",
    contribution:
      "I worked with React components, the search and filtering experience, shopping functionality, responsive styling, and Git-based team workflows using feature branches.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Node.js",
      "CSS",
      "Git",
      "GitHub",
    ],
    github: "https://github.com/palmebjoerk/matpafarten",
    live: null,
    video: null,
  },

  {
    number: "02",
    title: "Freaky Fashion",
    type: "FULL-STACK PROJECT",
    description:
      "A full-stack e-commerce store with products, categories, dynamic searchbar, favorites, shopping cart functionality, authentication, and an administration interface.",
    contribution:
      "I built both frontend and backend functionality including Express routes, database integration, authentication, sessions, favorites, cart management, search, and administration features.",
    technologies: [
      "Node.js",
      "Express",
      "EJS",
      "SQLite",
      "JavaScript",
      "CSS",
    ],
    github: "https://github.com/Swebass85/freaky-fashion",
    live: null,
    video: "/videos/freakyfashionvid.mp4",
  },

  {
    number: "03",
    title: "Ring Pappa",
    type: "PERSONAL PROJECT",
    description:
      "A simple communication app designed so a child can easily contact a parent. The application combines an extremely simple interface with video calling and push notifications.",
    contribution:
      "I designed and developed the application from concept to deployment, including the React interface, Firebase Hosting, Cloud Messaging, service workers, and notification functionality.",
    technologies: [
      "React",
      "Firebase",
      "Cloud Messaging",
      "JavaScript",
      "Vite",
    ],
    github: "https://github.com/Swebass85/ring-pappa",
    live: "https://ring-pappa.web.app",
    video: null,
  },

  {
    number: "04",
    title: "Restaurang Melody",
    type: "CLIENT PROJECT",
    description:
      "A responsive website created for a real restaurant in Vinslöv, Sweden. The website presents the restaurant, menu, opening hours, contact information, and multilingual content.",
    contribution:
      "I designed, developed, deployed, and maintain the website for the client, including responsive layouts, menu presentation, domain configuration, and ongoing updates.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Git",
    ],
    github: "https://github.com/Swebass85/restaurangmelody",
    live: "https://restaurangmelody.se",
    video: "/videos/melodyvid.mp4",
  },
];

function ProjectCard({ project }) {
  return (
    <article
      className={`project-card ${
        project.video ? "project-card-with-video" : ""
      }`}
    >
      {/* VIDEO */}
      {project.video && (
        <div className="project-video-container">
          <video
            className="project-video"
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />

          <div className="project-video-fade" />
        </div>
      )}

      {/* PROJECT INFORMATION */}
      <div className="project-info">
        <div className="project-topline">
          <span className="project-number">
            {project.number}
          </span>

          <span className="project-type">
            {project.type}
          </span>
        </div>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-contribution">
          <h4>My contribution</h4>

          <p>{project.contribution}</p>
        </div>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live Project ↗
            </a>
          )}
        </div>
      </div>

      {/* PLACEHOLDER FOR PROJECTS WITHOUT VIDEO */}
      {!project.video && (
        <div className="project-placeholder">
          <span>{project.title}</span>
        </div>
      )}
    </article>
  );
}

function Projects() {
  return (
    <section
      className="projects"
      id="projects"
    >
      <div className="projects-content">
        <div className="projects-heading">
          <p className="section-label">
            PROJECTS
          </p>

          <h2>Things I've built.</h2>

          <p className="projects-intro">
            A selection of projects where I've worked with frontend,
            full-stack development, user experience, APIs, databases,
            deployment, and collaborative development workflows.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;