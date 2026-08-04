import "./App.css";

const featuredProjects = [
  {
    number: "01",
    title: "Abdullah AI",
    category: "AI APPLICATION",
    description:
      "An Islamic knowledge assistant I am building to help users find relevant information from a structured knowledge base. The project includes a search system, embeddings and a FastAPI backend.",
    technologies: ["Python", "FastAPI", "RAG", "Embeddings"],
    link: "https://github.com/Mubbyraj/abdullah-ai",
    linkText: "View project",
    accent: "purple",
  },
  {
    number: "02",
    title: "NAVORA",
    category: "INFORMATION SYSTEM",
    description:
      "An information system for mobility and logistics. I am building the backend around users, companies, authentication, databases and services that can support a larger logistics platform.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "REST API"],
    link: "https://github.com/Mubbyraj/navora",
    linkText: "View project",
    accent: "orange",
  },
  {
    number: "03",
    title: "GulfNaija Trading",
    category: "BUSINESS WEBSITE",
    description:
      "A business website developed for a Qatar–Nigeria company. The website presents the company's services and provides an online presence for its business activities.",
    technologies: ["Web Development", "Responsive Design", "Business Website"],
    link: "https://magenta-clafoutis-8ccc73.netlify.app/",
    linkText: "Visit website",
    accent: "green",
  },
  {
    number: "04",
    title: "Nigerian High Commission",
    category: "WORDPRESS / WEB",
    description:
      "Web and digital support work involving the Nigerian High Commission in Kuala Lumpur, including work with the organisation's WordPress website and online content.",
    technologies: ["WordPress", "Web Management", "Content", "IT"],
    link: "https://nigeria.org.my/",
    linkText: "Visit website",
    accent: "blue",
  },
];

const academicProjects = [
  {
    number: "01",
    title: "GameForge Servers",
    description:
      "A university group project completed as part of a collaborative software development assignment.",
    link: "https://github.com/goldensquirrel11/Gameforge-servers-group-project",
  },
  {
    number: "02",
    title: "Light MariaDB Interpreter",
    description:
      "A university programming project focused on building a simplified database interpreter.",
    link: "https://github.com/Kharyybsam/Programming-Fundamentals---Light-MariaDB-Interpeter",
  },
  {
    number: "03",
    title: "Robot War",
    description:
      "A programming assignment developed around a robot battle concept as part of university coursework.",
    link: "https://github.com/osmanMukhtar/Asg1-Robot-War",
  },
];

const skills = [
  "Python",
  "SQL",
  "FastAPI",
  "PostgreSQL",
  "React",
  "REST APIs",
  "Git & GitHub",
  "Artificial Intelligence",
  "RAG",
  "Data Analytics",
  "WordPress",
  "Information Systems",
];

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}

      <header className="navbar">
        <a href="#home" className="name-mark">
          <span>RMO</span>
          <strong>RAJI MUBARAK OLOHUNISOLA</strong>
        </a>

        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>


      {/* HERO */}

      <main>

        <section id="home" className="hero">

          <div className="hero-background hero-background-one"></div>
          <div className="hero-background hero-background-two"></div>

          <div className="hero-content">

            <div className="status">
              <span></span>
              INFORMATION SYSTEMS · AI · DATA
            </div>

            <p className="hero-intro">
              RAJI MUBARAK OLOHUNISOLA
            </p>

            <h1>
              I build
              <br />
              <em>useful things.</em>
            </h1>

            <p className="hero-description">
              I am an Information Systems student interested in artificial
              intelligence, data and software development. I enjoy taking an
              idea, learning what is needed, and turning it into something
              that works.
            </p>

            <div className="hero-actions">

              <a href="#work" className="primary-button">
                See my work
                <span>↓</span>
              </a>

              <a
                href="https://github.com/Mubbyraj"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                GitHub
                <span>↗</span>
              </a>

            </div>

          </div>


          <div className="hero-profile">

            <div className="profile-top">
              <span>PROFILE</span>
              <span>2026</span>
            </div>

            <div className="profile-initials">
              RMO
            </div>

            <h2>
              Information Systems
              <br />
              Student & Developer
            </h2>

            <p>
              Building projects around AI, data, software and practical
              information systems.
            </p>

            <div className="profile-line"></div>

            <div className="profile-location">
              <span>Based in</span>
              <strong>Malaysia</strong>
            </div>

          </div>

        </section>


        {/* INTRODUCTION */}

        <section className="introduction">

          <div className="section-label">
            01 / APPROACH
          </div>

          <div className="introduction-content">

            <h2>
              Technology should make
              <span>things easier.</span>
            </h2>

            <p>
              My interest is in using technology to solve practical problems.
              I like understanding how a system should work, building the
              technical parts and seeing the result come together.
            </p>

          </div>

        </section>


        {/* FEATURED WORK */}

        <section id="work" className="work">

          <div className="section-heading">

            <div>
              <div className="section-label">
                02 / SELECTED WORK
              </div>

              <h2>Projects</h2>
            </div>

            <p>
              A selection of projects I have built, contributed to or worked
              on while developing my skills.
            </p>

          </div>


          <div className="project-grid">

            {featuredProjects.map((project) => (

              <article
                className={`project-card ${project.accent}`}
                key={project.number}
              >

                <div className="project-cover">

                  <div className="project-cover-number">
                    {project.number}
                  </div>

                  <div className="project-cover-title">
                    {project.title}
                  </div>

                  <div className="project-cover-category">
                    {project.category}
                  </div>

                </div>


                <div className="project-details">

                  <div className="project-number">
                    PROJECT {project.number}
                  </div>

                  <h3>{project.title}</h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="technology-list">

                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {project.linkText}
                    <span>↗</span>
                  </a>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ACADEMIC WORK */}

        <section className="academic">

          <div className="section-heading">

            <div>
              <div className="section-label">
                03 / UNIVERSITY WORK
              </div>

              <h2>Collaborative projects</h2>
            </div>

            <p>
              Group and academic projects that have given me experience
              working with other students and applying programming concepts
              to practical assignments.
            </p>

          </div>


          <div className="academic-list">

            {academicProjects.map((project) => (

              <article className="academic-item" key={project.number}>

                <div className="academic-number">
                  {project.number}
                </div>

                <div className="academic-main">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="academic-link"
                >
                  GitHub
                  <span>↗</span>
                </a>

              </article>

            ))}

          </div>

        </section>


        {/* ABOUT */}

        <section id="about" className="about">

          <div className="section-label">
            04 / ABOUT ME
          </div>

          <div className="about-grid">

            <h2>
              I am interested in
              <span>where technology meets real problems.</span>
            </h2>

            <div className="about-text">

              <p className="about-lead">
                I am currently studying Information Systems and developing my
                skills across software development, artificial intelligence
                and data.
              </p>

              <p>
                I have worked on websites, WordPress projects, APIs,
                databases, AI applications and university software projects.
                Each project has given me a different way of looking at
                technology and problem-solving.
              </p>

              <p>
                I am particularly interested in AI and data because of how
                they can be used to improve the way people and organisations
                make decisions and work with information.
              </p>

              <p>
                I am still learning and building, but I prefer practical
                experience. If I do not know something, I learn it and try to
                put it into practice.
              </p>

            </div>

          </div>

        </section>


        {/* SKILLS */}

        <section id="skills" className="skills">

          <div className="section-label">
            05 / SKILLS
          </div>

          <div className="skills-heading">

            <h2>
              Tools and technologies
              <span>I work with.</span>
            </h2>

          </div>


          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div className="skill" key={skill}>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {skill}
                </strong>

              </div>

            ))}

          </div>

        </section>


        {/* CONTACT */}

        <section id="contact" className="contact">

          <div className="contact-background">
            RMO
          </div>

          <div className="section-label">
            06 / CONTACT
          </div>

          <h2>
            Have a project
            <br />
            in mind?
          </h2>

          <p>
            If you have an idea, a project or an opportunity you would like
            to discuss, feel free to get in touch.
          </p>


          <div className="contact-actions">

            <a
              href="mailto:mubarakraji2404@gmail.com"
              className="contact-primary"
            >
              Email me
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mubarak-raji-549733231"
              target="_blank"
              rel="noreferrer"
              className="contact-secondary"
            >
              LinkedIn
              <span>↗</span>
            </a>

            <a
              href="https://github.com/Mubbyraj"
              target="_blank"
              rel="noreferrer"
              className="contact-secondary"
            >
              GitHub
              <span>↗</span>
            </a>

          </div>


          <div className="contact-information">

            <a href="mailto:mubarakraji2404@gmail.com">
              mubarakraji2404@gmail.com
            </a>

            <a href="tel:+601172481529">
              +60 11-7248 1529
            </a>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer>

        <strong>
          RAJI MUBARAK OLOHUNISOLA
        </strong>

        <span>
          Information Systems · AI · Data
        </span>

        <span>
          © 2026
        </span>

      </footer>

    </div>
  );
}

export default App;