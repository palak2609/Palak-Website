import { useState, useEffect } from 'react'

/* ============================================================
   DATA
   ============================================================ */

const NAV_LINKS = [
  { label: 'home', href: '#home' },
  { label: 'expertise', href: '#expertise' },
  { label: 'work', href: '#work' },
  { label: 'experience', href: '#experience' },
  { label: 'education', href: '#education' },
  { label: 'certifications', href: '#certifications' },
  { label: 'contact', href: '#contact' },
]

const EXPERTISE = [
  {
    number: '01',
    title: 'Full Stack Development',
    subtitle: 'React, Spring Boot, Flask',
    description:
      'Developing scalable applications across frontend and backend using React.js, REST APIs, Spring Boot, Flask, and secure authentication systems.',
  },
  {
    number: '02',
    title: 'AI Engineer',
    subtitle: 'LLMs, Hugging Face',
    description:
      'Building AI-driven solutions with LLMs, RAG workflows, Hugging Face models, and practical chatbot experiences for real-world products.',
  },
  {
    number: '03',
    title: 'Problem Solving',
    subtitle: 'Java, Python, DSA',
    description:
      'Applying strong data structures, algorithms, and system design fundamentals to create efficient, reliable, and maintainable software.',
  },
]

const PROJECTS = [
  {
    id: 1,
    title: 'CareerAI — AI Career Guidance Platform',
    category: 'AI + Full Stack',
    tags: ['ai', 'web'],
    featured: true,
    description:
      'Developed an AI-powered career guidance platform with chatbot, career quiz, and personalized dashboard using React, Flask, and MySQL. Implemented a RAG-based LLM system for personalized career advice and integrated job APIs for real-time job and course recommendations.',
    tech: ['React', 'Flask', 'MySQL', 'LLMs', 'RAG'],
    gradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
    letter: 'C',
    link: '#',
    image: '/img/career_ai.png',
  },
  {
    id: 2,
    title: 'ConnectSphere — Social Networking Platform',
    category: 'Full Stack Development',
    tags: ['web'],
    description:
      'Built a full-stack social media platform using Spring Boot and React.js with secure authentication including Google OAuth. Implemented real-time content sharing, user interaction features, and backend security using Spring Security.',
    tech: ['Spring Boot', 'React.js', 'Google OAuth', 'Spring Security'],
    letter: 'S',
    link: '#',
    image: '/img/connect_sphere.png',
  },
  {
    id: 3,
    title: 'Data Centre Health Dashboard',
    category: 'Full Stack / Data Visualization',
    tags: ['data', 'web'],
    description:
      'Developed a real-time monitoring dashboard using React, Flask, MySQL, and Plotly to automate system health tracking and significantly reduce manual analysis time.',
    tech: ['React', 'Flask', 'MySQL', 'Plotly'],
    letter: 'D',
    link: '#',
    image: '/img/data_center_health.png',
  },
  {
    id: 4,
    title: 'Markov Chain Text Generator',
    category: 'AI / Algorithms',
    tags: ['ai'],
    description:
      'Designed a probabilistic text generation model using Markov Chains and graph-based algorithms to generate coherent text from large datasets.',
    tech: ['Python', 'Markov Chains', 'Graph Algorithms'],
    letter: 'M',
    link: '#',
    image: '/img/markov_chain.png',
  },
]

const EXPERIENCE = [
  {
    role: 'Software Engineer Intern',
    company: 'Newgen Software',
    period: 'March 2026 — Present',
    location: 'India',
    website: null,
    description:
      'Working on enterprise products like OmniDocs and IBPS, gaining exposure to document management systems and workflow-based enterprise applications. Understanding system configurations, business workflows, and real-world enterprise architecture.',
    tech: ['Enterprise Systems', 'OmniDocs', 'IBPS', 'Workflow Applications'],
  },
  {
    role: 'Software Development Intern',
    company: 'Webkul Software Pvt Ltd',
    period: 'May 2025 — July 2025',
    location: 'India',
    website: null,
    description:
      'Developed a Markov Chain-based text generation system in Python using graph-based probabilistic models. Built an automation system integrating SharePoint-Webex bot with VM scheduling and Adaptive Cards delivery to 20+ users.',
    tech: ['Python', 'Markov Chains', 'SharePoint', 'Webex Bot', 'Adaptive Cards'],
  },
  {
    role: 'Software Development Intern',
    company: 'Indian Government Mint (SPMCIL)',
    period: 'June 2024 — July 2024',
    location: 'India',
    website: null,
    description:
      'Built a real-time Data Centre Health Dashboard using React, Flask, MySQL, and Plotly, reducing manual analysis time from hours to real-time. Conducted functional testing for SAP HR Travel Management system.',
    tech: ['React', 'Flask', 'MySQL', 'Plotly', 'SAP Testing'],
  },
]

const EDUCATION = [
  {
    title: 'B.Tech in Information Technology',
    institute: 'Manipal University Jaipur',
    period: '2022 — 2026',
    result: 'CGPA: 8.5',
  },
  {
    title: 'Intermediate — PCM',
    institute: 'Delhi Public School Ghaziabad',
    period: '2022',
    result: 'CBSE · 92%',
  },
  {
    title: 'Matriculation',
    institute: 'Delhi Public School Ghaziabad',
    period: '2020',
    result: 'CBSE · 96%',
  },
]

const SKILLS = [
  { group: 'Languages', items: ['Java', 'Python'] },
  { group: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Material UI'] },
  { group: 'Backend', items: ['Spring Boot', 'Flask', 'REST APIs', 'Spring Security'] },
  { group: 'Databases', items: ['MySQL', 'MongoDB', 'OracleDB'] },
  { group: 'AI / ML', items: ['LLMs', 'Gen AI', 'AI Integration', 'RAG', 'MCP Server'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Power BI'] },
]

const CERTIFICATIONS = [
  {
    title: 'Add Certification Title',
    issuer: 'Issuer / Platform',
    date: 'Month Year',
    credentialId: '',
    link: '#',
  },
  {
    title: 'Add Certification Title',
    issuer: 'Issuer / Platform',
    date: 'Month Year',
    credentialId: '',
    link: '#',
  },
  {
    title: 'Add Certification Title',
    issuer: 'Issuer / Platform',
    date: 'Month Year',
    credentialId: '',
    link: '#',
  },
]

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: '1st Position — DELL Hackathon',
    description:
      '6-month inter-college hackathon competition organised by DELL Technologies. Competed against teams across disciplines to deliver an end-to-end solution.',
    year: '2025',
  },
]

const RESUME_URL = 'https://drive.google.com/file/d/1nHyBURlJJorc7LRujltwsK73uQFu4eq9/view?usp=sharing'
const LINKEDIN_URL = 'https://www.linkedin.com/in/palak-srivastava26/'
const GITHUB_URL = 'https://github.com/palak2609/'

/* ============================================================
   SMOOTH SCROLL HELPER
   ============================================================ */

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/* ============================================================
   NAVBAR
   ============================================================ */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['home', 'expertise', 'work', 'experience', 'education', 'certifications', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 180) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    scrollTo(href.replace('#', ''))
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleClick(e, '#home')}
        >
          P<span className="accent">.</span>
        </a>

        <div className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link${active === link.label ? ' navbar__link--active' : ''}`}
              onClick={(e) => handleClick(e, link.href)}
            >
              <span className="navbar__link-comment">// </span>
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

/* ============================================================
   HERO
   ============================================================ */

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">
          Palak<span className="accent">.</span>
        </h1>
        <h2 className="hero__title">Software Engineer | AI + Full Stack Developer.</h2>
        <p className="hero__description">
          Final-year B.Tech IT student with hands-on experience in full-stack
          development and AI integration. Currently working as a Software
          Engineer Intern at Newgen Software, building enterprise-grade systems.
        </p>
        <div className="hero__cta">
          <button
            className="btn btn--primary"
            onClick={() => scrollTo('work')}
          >
            View My Work
          </button>
          <button
            className="btn btn--outline"
            onClick={() => scrollTo('contact')}
          >
            Get in Touch
          </button>
          <a
            className="btn btn--outline"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}

/* ============================================================
   EXPERTISE
   ============================================================ */

function Expertise() {
  return (
    <section id="expertise" className="expertise section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">// expertise</span>
          <h2 className="section__title">What I Do</h2>
          <p className="section__subtitle">
            Building scalable backend systems, full-stack applications, and
            AI-powered solutions with a strong problem-solving foundation.
          </p>
        </div>
        <div className="expertise__grid">
          {EXPERTISE.map((item) => (
            <div key={item.number} className="expertise__card">
              <span className="expertise__number">{item.number}</span>
              <h3 className="expertise__title">{item.title}</h3>
              <p className="expertise__subtitle">{item.subtitle}</p>
              <p className="expertise__description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   WORK
   ============================================================ */

const FILTER_OPTIONS = [
  { key: 'all', label: 'All' },
  { key: 'ai', label: '/ AI' },
  { key: 'web', label: '/ Full Stack' },
  { key: 'data', label: '/ Data Visualization' },
]

function Work() {
  const [filter, setFilter] = useState('all')
  const featured = PROJECTS.find((p) => p.featured)
  const filtered =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter))

  return (
    <section id="work" className="work section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">// work</span>
          <h2 className="section__title">My Work</h2>
        </div>

        {/* Featured */}
        <div className="work__featured">
          <span className="work__featured-label">Featured Project</span>
          <div className="work__featured-card">
            <div className="work__featured-image">
              <img
                className="project-image"
                src={featured?.image}
                alt={featured?.title}
              />
            </div>
            <div className="work__featured-content">
              <span className="work__featured-category">{featured?.category}</span>
              <h3 className="work__featured-title">{featured?.title}</h3>
              <p className="work__featured-desc">{featured?.description}</p>
              <div className="work__featured-tech">
                {featured?.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div>
                <a href={featured?.link} className="btn btn--outline btn--sm">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="work__filters">
          {FILTER_OPTIONS.map((f) => {
            const count =
              f.key === 'all'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.tags.includes(f.key)).length
            return (
              <button
                key={f.key}
                className={`work__filter-btn${filter === f.key ? ' work__filter-btn--active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.key === 'all'
                  ? `All ${count}`
                  : `${f.label} ${String(count).padStart(2, '0')}`}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="work__grid">
          {filtered.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card__image">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.title}
                />
                <div className="project-card__overlay">
                  <a href={project.link} className="project-card__link">
                    Show Project →
                  </a>
                </div>
              </div>
              <div className="project-card__content">
                <span className="project-card__category">{project.category}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   EXPERIENCE
   ============================================================ */

function Experience() {
  const [expanded, setExpanded] = useState(0)

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">// experience</span>
          <h2 className="section__title">Professional Experience</h2>
        </div>

        <div className="experience__list">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={i}
              className={`experience__item${expanded === i ? ' experience__item--expanded' : ''}`}
              onClick={() => setExpanded(expanded === i ? -1 : i)}
            >
              <div className="experience__header">
                <div className="experience__left">
                  <div className="experience__dot" />
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <div className="experience__meta">
                      <span className="experience__company">@ {exp.company}</span>
                      <span className="experience__period">{exp.period}</span>
                    </div>
                  </div>
                </div>
                <span className="experience__toggle">
                  {expanded === i ? '−' : '+'}
                </span>
              </div>

              {expanded === i && (
                <div className="experience__body">
                  <div className="experience__location">
                    <span>📍 {exp.location}</span>
                    {exp.website && (
                      <a
                        href={`https://${exp.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {exp.website} ↗
                      </a>
                    )}
                  </div>
                  <p className="experience__description">{exp.description}</p>
                  <div className="experience__tech">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="skills-sub">
          <div className="skills-sub__header">
            <span className="section__tag">// skills</span>
            <h2 className="section__title">Skills &amp; Technologies</h2>
          </div>
          <div className="testimonials__grid">
            {SKILLS.map((skill, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-card__author">
                  <span className="testimonial-card__name">{skill.group}</span>
                  <span className="testimonial-card__role">{skill.items.join(' · ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="experience section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">// education</span>
          <h2 className="section__title">Education</h2>
          <p className="section__subtitle">
            Academic foundation in Information Technology with consistent
            performance across school and undergraduate studies.
          </p>
        </div>

        <div className="experience__list">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="experience__item experience__item--expanded">
              <div className="experience__header">
                <div className="experience__left">
                  <div className="experience__dot" />
                  <div>
                    <h3 className="experience__role">{edu.title}</h3>
                    <div className="experience__meta">
                      <span className="experience__company">@ {edu.institute}</span>
                      <span className="experience__period">{edu.period}</span>
                    </div>
                  </div>
                </div>
                <span className="experience__toggle">{edu.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   CERTIFICATIONS & ACHIEVEMENTS
   ============================================================ */

function CertificationsAndAchievements() {
  const [openCert, setOpenCert] = useState(null)

  return (
    <section id="certifications" className="certs-section section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">// certifications & achievements</span>
          <h2 className="section__title">Certifications &amp; Achievements</h2>
        </div>

        <div className="certs-layout">
          {/* Left — Certifications */}
          <div className="certs-left">
            <p className="certs-col-title">Certifications</p>
            <div className="certs-list">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  className={`cert-card${openCert === i ? ' cert-card--open' : ''}`}
                  onClick={() => setOpenCert(openCert === i ? null : i)}
                >
                  <div className="cert-card__header">
                    <div className="cert-card__left">
                      <span className="cert-card__number">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h4 className="cert-card__title">{cert.title}</h4>
                        <span className="cert-card__issuer">{cert.issuer}</span>
                      </div>
                    </div>
                    <span className="cert-card__toggle">{openCert === i ? '−' : '+'}</span>
                  </div>
                  {openCert === i && (
                    <div className="cert-card__body">
                      <div className="cert-card__meta">
                        <span>📅 {cert.date}</span>
                        {cert.credentialId && <span>ID: {cert.credentialId}</span>}
                      </div>
                      {cert.link && cert.link !== '#' && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-card__link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Credential ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Achievements */}
          <div className="certs-right">
            <p className="certs-col-title">Achievements</p>
            <div className="achievements-list">
              {ACHIEVEMENTS.map((ach, i) => (
                <div key={i} className="achievement-card">
                  <span className="achievement-card__icon">{ach.icon}</span>
                  <div>
                    <h4 className="achievement-card__title">{ach.title}</h4>
                    <p className="achievement-card__desc">{ach.description}</p>
                    <span className="achievement-card__year">{ach.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   CONTACT
   ============================================================ */

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">// contact</span>
          <h2 className="section__title">Get In Touch</h2>
          <p className="section__subtitle">
            Open to software engineering roles, internships, and collaborations.
            LET'S BUILD — LET'S GROW — LET'S CONNECT.
          </p>
        </div>

        <div className="contact__inner">
          <div className="contact__availability">
            <div className="contact__availability-dot" />
            <span>Ghaziabad, India · Open to opportunities</span>
          </div>

          <div className="contact__email-wrapper">
            <span className="contact__email-label">Say hello</span>
            <a href="mailto:spalak2609@gmail.com" className="contact__email">
              spalak2609@gmail.com
            </a>
          </div>

          <div className="contact__socials">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="contact__social">LinkedIn</a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="contact__social">GitHub</a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="contact__social">Resume</a>
            <a href="tel:9810704569" className="contact__social">Phone</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer__inner">
          <p>
            Designed &amp; Developed by{' '}
            <span className="accent">Palak</span>
          </p>
          <p>© {new Date().getFullYear()} · All rights reserved</p>
        </div>
      </footer>
    </section>
  )
}

/* ============================================================
   APP
   ============================================================ */

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Work />
        <Experience />
        <Education />
        <CertificationsAndAchievements />
        <Contact />
      </main>
    </>
  )
}
