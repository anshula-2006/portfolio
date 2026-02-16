import ThemeToggle from "../components/ThemeToggle";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "FastAPI",
  "Node.js",
  "REST APIs",
  "JWT Authentication",
  "Git",
  "GitHub",
  "VS Code",
  "C++",
  "Python (Basic)",
  "Java (Basic)"
];

export default function Home() {
  return (
    <main>
      <nav className="nav-wrap">
        <div className="container nav">
          <div className="brand">Anshula.dev</div>
          <div className="nav-right">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-grid">
          <section>
            <p className="kicker">Web Design + Development Internship</p>
            <h1>Anshula Addanki</h1>
            <p className="lead">
              Computer Science student building responsive interfaces and backend APIs with a focus
              on clean UX and production-ready web experiences.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="mailto:anshulaandal@gmail.com">Email Me</a>
              <a className="btn btn-ghost" href="https://github.com/anshula-2006" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-ghost" href="https://www.linkedin.com/in/anshula-addanki-b73ab537a/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </section>
          <aside className="panel">
            <h2>Quick Info</h2>
            <p>Hyderabad, India</p>
            <p><a href="tel:+918919089397">+91 89190 89397</a></p>
            <p><a href="mailto:anshulaandal@gmail.com">anshulaandal@gmail.com</a></p>
          </aside>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <h2>Skills</h2>
          <div className="chips">
            {skills.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-grid">
            <article className="card">
              <h3>VitaMind - Virtual Mental Wellness Web App</h3>
              <p>Built a responsive mental wellness platform with FastAPI backend and JWT auth.</p>
              <a href="https://vita-mind-nu.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>
            </article>

            <article className="card">
              <h3>AI-Powered Quiz Generator</h3>
              <p>Designed API workflow for generating MCQs and short answers using OpenAI integration.</p>
              <span className="muted">Add project link when available</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <h2>Contact</h2>
          <p>Looking for internship opportunities in web design and development.</p>
          <p><a href="mailto:anshulaandal@gmail.com">anshulaandal@gmail.com</a></p>
        </div>
      </section>
    </main>
  );
}
