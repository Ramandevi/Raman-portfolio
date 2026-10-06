import { useState } from "react";
import "./App.css";

function App() {
  const [activeProject, setActiveProject] = useState(null);

  const openProject = (project) => {
    setActiveProject(project);

    setTimeout(() => {
      document
        .getElementById("project-details")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const closeProject = () => {
    setActiveProject(null);

    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const projects = {
    curtis: {
      title: "IVF & Clinic Management System",
      category: "Healthcare / Web Application",
      description:
        "A healthcare-focused web application designed to support clinic workflows, patient management, dashboards and operational activities through a clear and structured interface.",
      role: "UI/UX Designer",
      tools: "Figma",
      type: "Web Application",
      folder: "curtis",
      prefix: "curtis_",
      count: 20,
      figma: "#",
    },

    fotose: {
      title: "FOTOSE – Cotton Fibre Testing App",
      category: "Mobile Application",
      description:
        "A mobile application designed for cotton fibre testing, product management, subscription workflows and order-related activities with a focus on usability and clean mobile navigation.",
      role: "UI/UX Designer",
      tools: "Figma",
      type: "Mobile Application",
      folder: "fotose",
      prefix: "fotose-",
      count: 20,
      figma: "#",
    },

    ngo: {
      title: "NGO Management System",
      category: "Web Application",
      description:
        "A structured management interface designed for NGO operations, administrative workflows, dashboards, records and data management.",
      role: "UI/UX Designer",
      tools: "Figma",
      type: "Web Application",
      folder: "NGO",
      prefix: "ngo_",
      count: 20,
      figma: "#",
    },

    sama: {
      title: "Sama Builder",
      category: "Business Application",
      description:
        "A business application interface covering material indent, purchase, accounts and related operational dashboard workflows.",
      role: "UI/UX Designer",
      tools: "Figma",
      type: "Business Application",
      folder: "sama",
      prefix: "sama_",
      count: 20,
      figma: "#",
    },
  };

  const skills = [
    "Figma",
    "UI/UX Design",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Responsive Design",
    "Wireframing",
    "Prototyping",
    "Design Systems",
    "Dashboard Design",
    "Mobile UI Design",
  ];

  return (
    <div className="portfolio">
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <a href="#home" className="logo">
          Raman<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* ================= HERO ================= */}

        <section id="home" className="hero">
          <div className="hero-content">
            <div className="availability">
              <span></span>
              Available for opportunities
            </div>

            <p className="small-title">HELLO, I'M</p>

            <h1>
              Raman <span>Devi</span>
            </h1>

            <h2>
              Web Designer&nbsp; • &nbsp;UI/UX Designer&nbsp; • &nbsp;Frontend
              Developer
            </h2>

            <p className="hero-text">
              I create clean, intuitive and responsive digital experiences by
              combining thoughtful UI/UX design with practical frontend
              implementation.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                Explore My Work →
              </a>

              <a
                href="/resume.pdf"
                download="Raman_Devi_Resume.pdf"
                className="btn secondary"
              >
                Download Resume ↓
              </a>

              <a href="#contact" className="btn secondary">
                Let's Connect
              </a>
            </div>

            <div className="hero-tech">
              <span>Figma</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card main-card">
              <div className="profile-circle">RD</div>

              <p>DESIGN • BUILD • IMPROVE</p>

              <h3>
                Turning ideas into
                <br />
                meaningful interfaces.
              </h3>

              <div className="mini-ui">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="floating-card card-one">
              <strong>4+</strong>
              <span>Featured Projects</span>
            </div>

            <div className="floating-card card-two">
              <strong>UI/UX</strong>
              <span>Design Focus</span>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="section about-section">
          <div className="section-heading">
            <p className="section-label">ABOUT ME</p>

            <h2>Designing with purpose.</h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p>
                I am a Web Designer and UI/UX Designer with professional
                experience creating modern web interfaces, dashboards and mobile
                application screens.
              </p>

              <p>
                My work focuses on understanding user requirements, creating
                clean visual systems and designing interfaces that are
                practical, responsive and easy to use.
              </p>

              <p>
                I work primarily with Figma for UI/UX design and have hands-on
                experience with HTML, CSS, JavaScript and React for frontend
                implementation and responsive UI development.
              </p>

              <p>
                I enjoy transforming ideas and requirements into structured
                interfaces that balance usability, visual consistency and
                real-world business needs.
              </p>
            </div>

            <div className="about-points">
              <div>
                <span>01</span>
                <h3>User-focused</h3>
                <p>Simple, intuitive and practical user experiences.</p>
              </div>

              <div>
                <span>02</span>
                <h3>Detail-oriented</h3>
                <p>
                  Consistent layouts, spacing, typography and visual systems.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Design + Code</h3>
                <p>From Figma concepts to responsive frontend interfaces.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <p className="section-label">SKILLS & TOOLS</p>

            <h2>What I work with.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section projects-section">
          <div className="section-heading project-heading">
            <div>
              <p className="section-label">SELECTED WORK</p>

              <h2>Projects that tell the story.</h2>
            </div>

            <p>
              A selection of web, mobile and dashboard interfaces designed with
              a focus on usability, clarity, responsive layouts and visual
              consistency.
            </p>
          </div>

          <div className="projects-grid">
            {/* CURTIS */}

            <div className="project-card">
              <div className="project-image">
                <img
                  src="/projects/curtis/curtis_01.png"
                  alt="IVF and Clinic Management System"
                />

                <div className="image-overlay">
                  <button onClick={() => openProject("curtis")}>
                    View Case Study →
                  </button>
                </div>
              </div>

              <div className="project-info">
                <p>Healthcare / Web Application</p>

                <h3>IVF & Clinic Management System</h3>

                <span>UI/UX • Figma • Web Dashboard</span>

                <button
                  className="project-link"
                  onClick={() => openProject("curtis")}
                >
                  View Project →
                </button>
              </div>
            </div>

            {/* FOTOSE */}

            <div className="project-card">
              <div className="project-image">
                <img
                  src="/projects/fotose/fotose-01.png"
                  alt="FOTOSE Cotton Fibre Testing App"
                />

                <div className="image-overlay">
                  <button onClick={() => openProject("fotose")}>
                    View Case Study →
                  </button>
                </div>
              </div>

              <div className="project-info">
                <p>Mobile Application</p>

                <h3>FOTOSE – Cotton Fibre Testing App</h3>

                <span>UI/UX • Figma • Mobile Design</span>

                <button
                  className="project-link"
                  onClick={() => openProject("fotose")}
                >
                  View Project →
                </button>
              </div>
            </div>

            {/* NGO */}

            <div className="project-card">
              <div className="project-image">
                <img
                  src="/projects/NGO/ngo_01.png"
                  alt="NGO Management System"
                />

                <div className="image-overlay">
                  <button onClick={() => openProject("ngo")}>
                    View Case Study →
                  </button>
                </div>
              </div>

              <div className="project-info">
                <p>Web Application</p>

                <h3>NGO Management System</h3>

                <span>Dashboard • UI/UX • Figma</span>

                <button
                  className="project-link"
                  onClick={() => openProject("ngo")}
                >
                  View Project →
                </button>
              </div>
            </div>

            {/* SAMA */}

            <div className="project-card">
              <div className="project-image">
                <img src="/projects/sama/sama_01.png" alt="Sama Builder" />

                <div className="image-overlay">
                  <button onClick={() => openProject("sama")}>
                    View Case Study →
                  </button>
                </div>
              </div>

              <div className="project-info">
                <p>Business Application</p>

                <h3>Sama Builder</h3>

                <span>UI/UX • Dashboard • Web Design</span>

                <button
                  className="project-link"
                  onClick={() => openProject("sama")}
                >
                  View Project →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECT DETAILS ================= */}

        {activeProject && (
          <section id="project-details" className="section project-details">
            <button className="back-button" onClick={closeProject}>
              ← Back to Projects
            </button>

            <div className="case-study-header">
              <p className="section-label">CASE STUDY</p>

              <h2>{projects[activeProject].title}</h2>

              <p>{projects[activeProject].description}</p>

              <a
                href={projects[activeProject].figma}
                target="_blank"
                rel="noreferrer"
                className="btn primary"
                onClick={(e) => {
                  if (projects[activeProject].figma === "#") {
                    e.preventDefault();
                  }
                }}
              >
                View Figma Design ↗
              </a>
            </div>

            <div className="project-meta">
              <div>
                <small>ROLE</small>
                <strong>{projects[activeProject].role}</strong>
              </div>

              <div>
                <small>TOOLS</small>
                <strong>{projects[activeProject].tools}</strong>
              </div>

              <div>
                <small>TYPE</small>
                <strong>{projects[activeProject].type}</strong>
              </div>
            </div>

            <div className="gallery-heading">
              <div>
                <p className="section-label">DESIGN SCREENS</p>

                <h3>Interface exploration</h3>
              </div>

              <span>Selected screens from the project</span>
            </div>

            <div className="gallery">
              {Array.from(
                {
                  length: projects[activeProject].count,
                },
                (_, index) => {
                  const number = String(index + 1).padStart(2, "0");

                  return (
                    <div className="gallery-item" key={number}>
                      <img
                        src={`/projects/${projects[activeProject].folder}/${projects[activeProject].prefix}${number}.png`}
                        alt={`${projects[activeProject].title} screen ${number}`}
                      />
                    </div>
                  );
                },
              )}
            </div>
          </section>
        )}

        {/* ================= EXPERIENCE ================= */}

        <section id="experience" className="section experience-section">
          <div className="section-heading">
            <p className="section-label">EXPERIENCE</p>

            <h2>Professional journey.</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <div className="experience-top">
                  <div>
                    <span className="experience-date">June 2024 – Present</span>

                    <h3>Web Designer</h3>

                    <h4 className="experience-company">
                      Pragyaware Informatics Pvt. Ltd. — UHBVN Head Office
                    </h4>
                  </div>

                  <span className="experience-status">Currently Working</span>
                </div>

                <p className="experience-summary">
                  Working as a Web Designer with hands-on experience in
                  designing professional web applications, dashboards and mobile
                  interfaces for real-world business requirements.
                </p>

                <ul className="experience-list">
                  <li>
                    Designing responsive web and mobile interfaces using Figma,
                    focusing on usability, visual hierarchy and consistent
                    design.
                  </li>

                  <li>
                    Creating dashboards, forms, management systems and
                    application workflows based on client and business
                    requirements.
                  </li>

                  <li>
                    Converting requirements and wireframes into polished,
                    developer-ready UI designs with reusable visual patterns.
                  </li>

                  <li>
                    Working with HTML5 and CSS3 to understand and implement
                    responsive frontend layouts.
                  </li>

                  <li>
                    Collaborating on projects across healthcare, business
                    management, NGO and mobile application domains.
                  </li>

                  <li>
                    Currently expanding frontend development skills with
                    JavaScript and React.js.
                  </li>
                </ul>

                <div className="timeline-tags">
                  <span>Figma</span>
                  <span>UI/UX</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>React.js</span>
                  <span>Responsive Design</span>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}

        <section className="section services-section">
          <div className="section-heading">
            <p className="section-label">WHAT I CAN DO</p>

            <h2>Design that solves problems.</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <span>01</span>

              <h3>UI/UX Design</h3>

              <p>
                Clean, user-focused interfaces for web and mobile products, from
                wireframes and layouts to polished visual designs.
              </p>
            </div>

            <div className="service-card">
              <span>02</span>

              <h3>Web Design</h3>

              <p>
                Modern responsive website and dashboard designs built around
                usability, visual hierarchy and real business requirements.
              </p>
            </div>

            <div className="service-card">
              <span>03</span>

              <h3>Frontend UI</h3>

              <p>
                Translating design concepts into responsive HTML, CSS and
                React-based interfaces with a focus on clean UI implementation.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <p className="section-label">GET IN TOUCH</p>

            <h2>
              Let's create something
              <span> useful & impactful.</span>
            </h2>

            <p className="contact-description">
              I'm currently open to Web Designer, UI/UX Designer and Frontend
              opportunities. If you have a project, role or collaboration in
              mind, I'd be happy to connect.
            </p>

            <div className="contact-details">
              <a href="mailto:ramandevi761@gmail.com" className="contact-item">
                <div className="contact-icon">@</div>

                <div>
                  <small>EMAIL</small>
                  <strong>ramandevi761@gmail.com</strong>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/raman-devi-5a5625290/"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">in</div>

                <div>
                  <small>LINKEDIN</small>
                  <strong>Connect on LinkedIn ↗</strong>
                </div>
              </a>
            </div>

            <div className="contact-buttons">
              <a href="mailto:ramandevi761@gmail.com" className="btn primary">
                Email Me →
              </a>

              <a href="#projects" className="btn secondary">
                View Projects
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer>
        <div>
          <strong>
            Raman<span>.</span>
          </strong>

          <p>Web Designer • UI/UX Designer • Frontend Developer</p>
        </div>

        <p>© 2026 Raman Devi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
