import Link from "next/link";
import type { CSSProperties } from "react";
import { projects } from "./projects/data";

const highlights = [
  { value: "4+", label: "Years building software" },
  { value: "10+", label: "Engineering roles" },
  { value: "2×", label: "National 1st-place awards" },
];

const experience = [
  {
    date: "2026 — Present",
    role: "Software Project Lead & Software Engineer",
    company: "Kreasi Bali Sasmita Nusantara",
    text: "Leading projects from requirements and architecture through delivery, while building scalable interfaces, APIs, databases, secure authentication, and real-time features.",
  },
  {
    date: "2022 — Present",
    role: "Freelance Software Engineer",
    company: "Haris Dev",
    text: "Owning end-to-end delivery for full-stack applications and machine-learning work, from discovery and system design to deployment and maintenance.",
  },
  {
    date: "2025",
    role: "Software Engineer",
    company: "Jupitr Agency",
    text: "Built and deployed a real-time project management product and managed its architecture, data model, testing, production release, and maintenance.",
  },
  {
    date: "2023 — 2025",
    role: "Lead Engineer, Backend Developer & Data Engineer",
    company: "Mudapedia Digital Indonesia · PawangTech",
    text: "Led engineers, developed backend systems and REST APIs, integrated multiple databases, and prepared machine-learning data workflows.",
  },
];

const skills = [
  "Full-stack development",
  "Backend engineering",
  "RESTful APIs",
  "System architecture",
  "Real-time applications",
  "Google Cloud",
  "MySQL · PostgreSQL · MongoDB",
  "Authentication & authorization",
  "Data engineering",
  "Machine-learning integration",
  "Technical leadership",
  "Production maintenance",
];

const marqueeSkills = ["Full-stack", "Backend engineering", "System architecture", "Real-time apps", "Cloud computing", "Data engineering", "Machine learning", "Technical leadership"];
const marqueeTools = ["Google Cloud", "RESTful APIs", "MySQL", "PostgreSQL", "MongoDB", "Authentication", "Data preprocessing", "Production deployment"];

export default function Home() {
  return (
    <main className="home-page">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Haris Sofyan home">
          HS<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-cta" href="mailto:haristiani243@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow"><i /> Available for the right opportunity</div>
          <h1>
            I build software
            <span>that moves ideas forward.</span>
          </h1>
          <p className="hero-intro">
            Software & Cloud Engineer with 4+ years of experience turning complex requirements into reliable, production-ready products.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <span>↓</span></a>
            <a className="button secondary" href="/Haris_Sofyan_Portfolio_English.pdf" target="_blank" rel="noreferrer">View portfolio <span>↗</span></a>
            <a className="button tertiary" href="/Haris_Sofyan_CV.pdf" download>Download CV</a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="world-grid" />
          <div className="orbital orbital-one" />
          <div className="orbital orbital-two" />
          <div className="orbital orbital-three" />
          <div className="core">
            <div className="core-face front"><span>BUILD</span><small>01</small></div>
            <div className="core-face back"><span>SHIP</span><small>02</small></div>
            <div className="core-face left"><span>LEAD</span><small>03</small></div>
            <div className="core-face right"><span>SCALE</span><small>04</small></div>
            <div className="core-face top" />
            <div className="core-face bottom" />
          </div>
          <div className="holo-panel holo-one"><span>01</span><b>ARCHITECTURE</b><i /></div>
          <div className="holo-panel holo-two"><span>02</span><b>REAL-TIME</b><i /></div>
          <div className="holo-panel holo-three"><span>03</span><b>DEPLOYMENT</b><i /></div>
          <span className="visual-label label-a">SYSTEMS</span>
          <span className="visual-label label-b">CLOUD</span>
          <span className="visual-label label-c">DATA</span>
        </div>

        <div className="hero-stats" data-reveal>
          {highlights.map((item) => (
            <div className="stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section work" id="work">
        <div className="section-heading" data-reveal>
          <div><span className="section-index">01 / SELECTED WORK</span><h2>Built for real-world impact.</h2></div>
          <p>From collaborative platforms to public-sector integrations, I focus on dependable systems that make complicated work feel simple.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Link className="project-card" href={`/projects/${project.slug}`} key={project.number} data-tilt data-reveal style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
              <div className="project-top"><span>{project.number}</span><span className="arrow">↗</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="portfolio-deck" id="portfolio">
        <a className="portfolio-preview" href="/Haris_Sofyan_Portfolio_English.pdf" target="_blank" rel="noreferrer" data-tilt data-reveal aria-label="Open Haris Sofyan portfolio PDF">
          <div className="portfolio-preview-glow" />
          <img src="/portfolio-cover.png" alt="Cover of Haris Sofyan English portfolio" />
          <span className="deck-page-count">12 PAGES</span>
          <span className="deck-open">OPEN PDF ↗</span>
        </a>
        <div className="portfolio-deck-copy" data-reveal>
          <span className="section-index">02 / PORTFOLIO DECK</span>
          <h2>A closer look at the work.</h2>
          <p>A curated 12-page portfolio covering AI-enabled education, therapy operations, business platforms, school systems, hospitality, property, retail, and enterprise delivery.</p>
          <div className="deck-meta">
            <div><span>Edition</span><strong>English · 2026</strong></div>
            <div><span>Format</span><strong>PDF · 12 pages</strong></div>
          </div>
          <div className="deck-actions">
            <a className="button primary" href="/Haris_Sofyan_Portfolio_English.pdf" target="_blank" rel="noreferrer">View full portfolio <span>↗</span></a>
            <a className="button secondary" href="/Haris_Sofyan_Portfolio_English.pdf" download>Download PDF</a>
          </div>
        </div>
      </section>

      <section className="marquee-section" aria-label="Tools and skills" data-reveal>
        <div className="marquee-label"><span>TOOLS + SKILLS</span><i>04:12</i></div>
        <div className="marquee marquee-forward">
          <div className="marquee-track">
            {[...marqueeSkills, ...marqueeSkills].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✦</i></span>)}
          </div>
        </div>
        <div className="marquee marquee-reverse">
          <div className="marquee-track">
            {[...marqueeTools, ...marqueeTools].map((item, index) => <span key={`${item}-${index}`}>{item}<i>↗</i></span>)}
          </div>
        </div>
      </section>

      <section className="section experience" id="experience" data-reveal>
        <div className="section-heading compact">
          <div><span className="section-index">03 / EXPERIENCE</span><h2>Experience with ownership.</h2></div>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-row" key={item.role + item.company} data-reveal>
              <time>{item.date}</time>
              <div><h3>{item.role}</h3><span className="company">{item.company}</span></div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="experience-foot">
          <p>Additional experience across software implementation, lecturing, and IT support.</p>
          <a href="/Haris_Sofyan_CV.pdf" target="_blank" rel="noreferrer">View complete CV <span>↗</span></a>
        </div>
      </section>

      <section className="section about" id="about" data-reveal>
        <div className="about-copy">
          <span className="section-index">04 / ABOUT & EXPERTISE</span>
          <h2>Engineering depth.<br /><em>Human clarity.</em></h2>
          <p>I work across the full product lifecycle—from requirements and architecture to testing, deployment, and continuous improvement. I&apos;m equally comfortable guiding a team, shaping an API, or tracing a production issue.</p>
          <div className="education">
            <span>Education</span>
            <strong>Bachelor of Informatics Engineering</strong>
            <small>STIKOM PGRI Banyuwangi · 2022—2026</small>
          </div>
        </div>
        <div className="skills-panel">
          <div className="skills-list">
            {skills.map((skill, index) => <div key={skill}><span>{String(index + 1).padStart(2, "0")}</span>{skill}</div>)}
          </div>
          <div className="credentials">
            <div><span>Certified in</span><strong>Google Cloud fundamentals & load balancing</strong></div>
            <div><span>Recognition</span><strong>National winner · Mobile programming & poster design</strong></div>
          </div>
        </div>
      </section>

      <section className="contact" data-reveal>
        <span className="section-index">05 / CONTACT</span>
        <h2>Have a meaningful challenge?</h2>
        <a className="contact-link" href="mailto:haristiani243@gmail.com">Let&apos;s build it <span>↗</span></a>
        <div className="contact-meta">
          <span>Banyuwangi, East Java · Indonesia</span>
          <div>
            <a href="https://linkedin.com/in/haris-sofyan" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="tel:+6285784161309">+62 857 8416 1309</a>
            <a href="/Haris_Sofyan_Portfolio_English.pdf" target="_blank" rel="noreferrer">Portfolio PDF</a>
            <a href="mailto:haristiani243@gmail.com">Email</a>
          </div>
        </div>
      </section>

      <footer><span>© 2026 Haris Sofyan</span><span>Software Engineer · Cloud Engineer</span></footer>
    </main>
  );
}
