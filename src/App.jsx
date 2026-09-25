import "./App.css";

function App() {
  const skills = {
    languages: ["Java", "C++", "Python", "PHP", "Dart"],
    mobile: ["Android Development", "Flutter"],
    backend: ["MySQL", "REST APIs"],
    tools: ["Git", "Version Control", "Postman"],
    analytics: ["Tableau", "WEKA", "R"],
  };

  const experiences = [
    {
      date: "March 2024 — Present",
      role: "Mobile Software Engineer",
      company: "Solutions Exchange Inc.",
      description:
        "Contributing to the ongoing development and enhancement of a production-grade online banking Android application serving real users.",
      responsibilities: [
        "Design, implement, and optimize application features aligned with business and compliance requirements.",
        "Analyze and resolve production issues to improve application stability and user experience.",
        "Collaborate with backend engineers, QA teams, and product stakeholders to ensure timely and high-quality releases.",
        "Participate in code reviews and contribute to clean, maintainable, and scalable codebases.",
      ],
    },
    {
      date: "May 2022 — November 2023",
      role: "Software Engineer Intern",
      company: "Amdocs Philippines",
      description:
        "Contributed to enterprise-level software modules within an Agile development environment.",
      responsibilities: [
        "Assisted in backend feature development, database operations, and system enhancements.",
        "Supported testing, debugging, and quality assurance processes.",
        "Collaborated with cross-functional teams to deliver project milestones on schedule.",
      ],
    },
  ];

  const projects = [
    {
      year: "2023",
      title: "Amdocs Carpool Application",
      description:
        "A carpooling application focused on location-based services and user interaction.",
      technologies: "Backend Development • CRUD • Google Maps API",
      details: [
        "Implemented core CRUD functionalities and database integration.",
        "Integrated Google Maps Directions and Places APIs for location services.",
        "Contributed to frontend components supporting user interactions.",
      ],
    },
    {
      year: "2023",
      title: "Smart Garage",
      description:
        "A mobile application integrated with Arduino hardware for smart garage functionality.",
      technologies: "Mobile Development • Arduino • Hardware Integration",
      details: [
        "Led end-to-end development of the mobile application.",
        "Coordinated software and hardware integration.",
        "Performed system functionality testing.",
      ],
    },
    {
      year: "2021 — 2022",
      title: "EcoRam",
      description:
        "A full-stack system that converts recyclable materials into a virtual rewards platform.",
      technologies: "Full Stack • Frontend • Backend",
      details: [
        "Co-developed the complete system.",
        "Contributed to frontend and backend development.",
        "Created system documentation using structured design methodologies.",
      ],
    },
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          GTR<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">Mobile Software Engineer</p>

          <h1>
            Genesis T.
            <br />
            <span>Reyes.</span>
          </h1>

          <p className="hero-description">
            I build secure, scalable, and user-focused software with
            experience in Android development, backend systems, and
            production-level applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-side">
          <span>Based in</span>
          <strong>Mandaluyong City</strong>
          <span>Philippines</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section-label">01 — About</div>

        <div className="about-grid">
          <h2>
            Building software
            <br />
            with purpose.
          </h2>

          <div className="about-text">
            <p>
              I'm a Mobile Software Engineer with experience contributing
              to a production-level online banking application serving
              real users.
            </p>

            <p>
              My experience spans Android development, backend systems,
              databases, REST APIs, and software engineering in Agile
              environments.
            </p>

            <p>
              I enjoy solving technical problems, debugging complex
              issues, and collaborating with cross-functional teams to
              deliver reliable software.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="section-label">02 — Experience</div>

        <div className="section-heading">
          <h2>Professional Experience</h2>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={index}>
              <div className="experience-date">
                {experience.date}
              </div>

              <div className="experience-content">
                <h3>{experience.role}</h3>
                <h4>{experience.company}</h4>

                <p>{experience.description}</p>

                <ul>
                  {experience.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-label">03 — Projects</div>

        <div className="section-heading">
          <h2>Selected Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <div className="project-top">
                <span>0{index + 1}</span>
                <span>{project.year}</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <ul>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>

              <div className="project-tech">
                {project.technologies}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="section-label">04 — Skills</div>

        <div className="section-heading">
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-container">
          <SkillGroup title="Languages" skills={skills.languages} />
          <SkillGroup title="Mobile Development" skills={skills.mobile} />
          <SkillGroup title="Backend & Database" skills={skills.backend} />
          <SkillGroup title="Tools" skills={skills.tools} />
          <SkillGroup title="Analytics" skills={skills.analytics} />
        </div>
      </section>

      {/* Education */}
      <section className="section education-section">
        <div className="section-label">05 — Education</div>

        <div className="education">
          <div>
            <p className="education-date">2019 — 2023</p>
          </div>

          <div>
            <h2>Bachelor of Science in Computer Engineering</h2>
            <p>Asia Pacific College</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <p className="eyebrow">06 — Contact</p>

          <h2>
            Let's build
            <br />
            something useful.
          </h2>

          <p>
            I'm open to discussing software engineering opportunities,
            projects, and interesting technical challenges.
          </p>

          <a
            href="mailto:genesis.tubice.reyes@gmail.com"
            className="btn primary"
          >
            Email Me
          </a>

          <div className="contact-details">
            <span>Mandaluyong City, Philippines</span>

            <a href="tel:09951603755">
              0995 160 3755
            </a>

            <a href="mailto:genesis.tubice.reyes@gmail.com">
              genesis.tubice.reyes@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/gtreyes"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Genesis T. Reyes</p>
      </footer>
    </div>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>

      <div className="skill-list">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default App;
